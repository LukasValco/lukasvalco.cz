/**
 * Generuje favicon.ico, apple-touch-icon.png a OG image
 * z favicon.svg + portrétu Lukáše.
 *
 * Spuštění: node scripts/generate-icons.mjs
 */
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const FAVICON_SVG = path.join(root, 'src/assets/favicons/favicon.svg');
const FAVICON_ICO = path.join(root, 'src/assets/favicons/favicon.ico');
const APPLE_TOUCH = path.join(root, 'src/assets/favicons/apple-touch-icon.png');
const PORTRAIT = path.join(root, 'src/assets/images/portrait/avatar-hero.png');
const OG_OUTPUT = path.join(root, 'src/assets/images/og-image.png');

async function generateAppleTouch(svgBuffer) {
  await sharp(svgBuffer).resize(180, 180).png().toFile(APPLE_TOUCH);
  console.log('  ✓ apple-touch-icon.png (180x180)');
}

async function generateIco(svgBuffer) {
  const sizes = [16, 32, 48, 64];
  const buffers = await Promise.all(sizes.map((s) => sharp(svgBuffer).resize(s, s).png().toBuffer()));
  const ico = await pngToIco(buffers);
  await writeFile(FAVICON_ICO, ico);
  console.log('  ✓ favicon.ico (16/32/48/64)');
}

async function generateOgImage() {
  const W = 1200;
  const H = 630;

  const portraitSize = 360;
  const portraitTop = 135;
  const portraitLeft = W - portraitSize - 80;
  const portraitBuf = await sharp(PORTRAIT)
    .resize(portraitSize, portraitSize, { fit: 'cover', position: 'top' })
    .composite([
      {
        input: Buffer.from(
          `<svg width="${portraitSize}" height="${portraitSize}"><rect width="${portraitSize}" height="${portraitSize}" rx="32" ry="32" fill="white"/></svg>`
        ),
        blend: 'dest-in',
      },
    ])
    .png()
    .toBuffer();

  const overlaySvg = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FBF7F0"/>
      <stop offset="100%" stop-color="#F3ECDE"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>

  <!-- LV monogram top-left -->
  <g transform="translate(80, 70)">
    <rect width="72" height="72" rx="14" fill="#1E3A5F"/>
    <g transform="translate(8, 8) scale(0.438)">
      <path d="M28 28 L42 28 L42 86 L62 86 L62 100 L28 100 Z" fill="#FFFFFF"/>
      <path d="M60 28 L74 28 L82 78 L90 28 L104 28 L86 100 L78 100 Z" fill="#FFFFFF"/>
    </g>
  </g>

  <!-- Tagline (two lines for breathing room) -->
  <text x="80" y="270" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="700"
        fill="#1E3A5F" letter-spacing="2.5">FOTOVOLTAICKÝ EXPERT</text>
  <text x="80" y="298" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="700"
        fill="#1E3A5F" letter-spacing="2.5">ENERGETICKÝ PORADCE</text>

  <!-- Name -->
  <text x="80" y="400" font-family="Arial, Helvetica, sans-serif" font-size="84" font-weight="900"
        fill="#12233B" letter-spacing="-2">Lukáš Valčo</text>

  <!-- Description -->
  <text x="80" y="460" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="400"
        fill="#586274">Pomáhám lidem s fotovoltaikou</text>
  <text x="80" y="494" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="400"
        fill="#586274">a energetikou.</text>

  <!-- URL pill -->
  <g transform="translate(80, 530)">
    <rect width="220" height="46" rx="23" fill="#B45309"/>
    <text x="110" y="30" font-family="Arial, Helvetica, sans-serif" font-size="20" font-weight="700"
          fill="#FFFFFF" text-anchor="middle">lukasvalco.cz</text>
  </g>
</svg>`;

  await sharp(Buffer.from(overlaySvg))
    .composite([{ input: portraitBuf, top: portraitTop, left: portraitLeft }])
    .png()
    .toFile(OG_OUTPUT);
  console.log(`  ✓ og-image.png (${W}×${H})`);
}

async function main() {
  console.log('Generuji ikony a OG image…');
  const svgBuffer = await readFile(FAVICON_SVG);
  await generateAppleTouch(svgBuffer);
  await generateIco(svgBuffer);
  await generateOgImage();
  console.log('Hotovo.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
