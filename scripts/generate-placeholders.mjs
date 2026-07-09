#!/usr/bin/env node
/**
 * Generates themed placeholder SVG images for artists and albums.
 * Run once: node scripts/generate-placeholders.mjs
 */
import { mkdirSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public', 'images');

function svg(width, height, bg, label, accent = '#ffffff') {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="100%" height="100%" fill="${bg}"/>
  <text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" fill="${accent}" font-family="sans-serif" font-size="18" opacity="0.9">${label}</text>
  <text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" fill="${accent}" font-family="sans-serif" font-size="11" opacity="0.5">placeholder</text>
</svg>`;
}

const assets = [
  ['dj-shuvohl/profile.svg', svg(400, 400, '#1b4332', 'DJ Shuvohl', '#95d5b2')],
  ['dj-shuvohl/photosynthesis.svg', svg(400, 400, '#2d6a4f', 'Photosynthesis', '#d8f3dc')],
  ['dj-shuvohl/greenhouse.svg', svg(400, 400, '#40916c', 'Greenhouse Sessions', '#d8f3dc')],
  ['dj-mellow-d/profile.svg', svg(400, 400, '#3d2817', 'DJ Mellow-D', '#e9c46a')],
  ['dj-mellow-d/fractal-drift.svg', svg(400, 400, '#1a3a3a', 'Fractal Drift', '#2a9d8f')],
  ['dj-mellow-d/rascal-stew.svg', svg(400, 400, '#e07a2f', 'Rascal Stew', '#f4e4bc')],
  ['ernieshmitz/profile.svg', svg(400, 400, '#0a0a0a', 'Ernieshmitz', '#00ff41')],
  ['ernieshmitz/8bit-annihilation.svg', svg(400, 400, '#16213e', '8-Bit Annihilation', '#ff00ff')],
  ['ernieshmitz/pixel-wobble.svg', svg(400, 400, '#1a1a2e', 'Pixel Wobble', '#00ff41')],
  ['jacobplaylists/profile.svg', svg(400, 400, '#3d1a5c', 'Jacobplaylists', '#ffd6e8')],
  ['jacobplaylists/starlit-currents.svg', svg(400, 400, '#0077b6', 'Starlit Currents', '#fce4ec')],
  ['jacobplaylists/chill-constellation.svg', svg(400, 400, '#ff6b9d', 'Chill Constellation', '#48cae4')],
  ['soficchi/profile.svg', svg(400, 400, '#5c3d6e', 'Soficchi', '#ffe066')],
  ['soficchi/kawaii-lullaby.svg', svg(400, 400, '#f8a5c2', 'Kawaii Lullaby', '#fff5f7')],
  ['soficchi/pastel-opera.svg', svg(400, 400, '#c3aed6', 'Pastel Opera', '#fff5f7')],
  ['junipher/profile.svg', svg(400, 400, '#2d6a4f', 'Junipher', '#b7e4c7')],
  ['junipher/green-park.svg', svg(400, 400, '#40916c', 'Green Park Serenade', '#e8f5e9')],
  ['junipher/gentle-horns.svg', svg(400, 400, '#52b788', 'Gentle Horns', '#e8f5e9')],
  ['onionoid/profile.svg', svg(400, 400, '#3d3d5c', 'Onionoid', '#9d4edd')],
  ['onionoid/gemstone-current.svg', svg(400, 400, '#4a6670', 'Gemstone Current', '#e8eaf6')],
  ['onionoid/mined-melodies.svg', svg(400, 400, '#6c757d', 'Mined Melodies', '#7b68ee')],
  ['goat-gum/chew-on-this.svg', svg(400, 400, '#e63946', 'Chew on This', '#fff8e7')],
  ['goat-gum/vintage-waves.svg', svg(400, 400, '#6a0572', 'Vintage Waves', '#ffd60a')],
  ['goat-gum/archive-greenhouse.svg', svg(400, 400, '#4a3f2f', 'Early Greenhouse', '#d4a574')],
  ['goat-gum/archive-fractals.svg', svg(400, 400, '#6b5b45', 'First Fractals', '#d4a574')],
  ['goat-gum/archive-demo.svg', svg(400, 400, '#2c2416', 'Demo Tape Vol. 1', '#c4a77d')],
  ['goat-gum/archive-river.svg', svg(400, 400, '#8b7355', 'River Sessions', '#f5f0e8')],
];

for (const [relPath, content] of assets) {
  const fullPath = join(publicDir, relPath);
  mkdirSync(dirname(fullPath), { recursive: true });
  writeFileSync(fullPath, content);
}

console.log(`Generated ${assets.length} placeholder images in public/images/`);
