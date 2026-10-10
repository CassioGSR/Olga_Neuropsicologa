import sharp from "sharp";
import { readdirSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const IN = "img";          // pasta onde estão as fotos originais
const OUT = "src/assets";  // saída direta para o projeto
mkdirSync(OUT, { recursive: true });

// nome do arquivo original -> nome novo
const names = {
  "WhatsApp Image 2026-08-25 at 23.53.34.jpeg": "olga-hero",
  "WhatsApp Image 2026-08-25 at 23.53.33.jpeg": "olga-office",
  "WhatsApp Image 2026-08-25 at 23.53.32.jpeg": "olga-portrait",
};

for (const file of readdirSync(IN)) {
  const out = names[file];
  if (!out) continue;
  await sharp(join(IN, file))
    .rotate()                                        // corrige a orientação pelo EXIF
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 78 })                           // remove metadados (EXIF/GPS)
    .toFile(join(OUT, `${out}.webp`));
  console.log("ok:", file, "→", `${out}.webp`);
}