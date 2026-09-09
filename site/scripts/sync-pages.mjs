import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptsDir = path.dirname(fileURLToPath(import.meta.url))
const siteDir = path.resolve(scriptsDir, '..')
const repoRoot = path.resolve(siteDir, '..')
const distDir = path.join(siteDir, 'dist')
const originalsSrc = path.join(repoRoot, 'originals')

if (!fs.existsSync(distDir)) {
  throw new Error(`Missing ${distDir} — run vite build first.`)
}

fs.cpSync(originalsSrc, path.join(distDir, 'originals'), { recursive: true })

const assetsOut = path.join(repoRoot, 'assets')
if (fs.existsSync(assetsOut)) fs.rmSync(assetsOut, { recursive: true })
fs.cpSync(path.join(distDir, 'assets'), assetsOut, { recursive: true })

const indexSrc = path.join(distDir, 'index.html')
fs.copyFileSync(indexSrc, path.join(repoRoot, 'index.html'))
fs.copyFileSync(indexSrc, path.join(repoRoot, '404.html'))

for (const file of ['favicon.svg', 'icons.svg']) {
  const src = path.join(distDir, file)
  if (fs.existsSync(src)) fs.copyFileSync(src, path.join(repoRoot, file))
}

fs.writeFileSync(path.join(repoRoot, '.nojekyll'), '')

console.log('Synced GitHub Pages files to repo root (index.html, 404.html, assets/).')
