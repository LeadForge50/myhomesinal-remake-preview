import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const siteDir = path.dirname(fileURLToPath(import.meta.url))
const originalsDir = path.resolve(siteDir, '../originals')

function originalsPlugin(): Plugin {
  const prefixes = ['/myhomesinal-remake-preview/originals', '/originals']
  const types: Record<string, string> = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.webp': 'image/webp',
    '.mp4': 'video/mp4',
    '.svg': 'image/svg+xml',
  }

  return {
    name: 'serve-originals',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split('?')[0] ?? ''
        const prefix = prefixes.find((p) => url.startsWith(p))
        if (!prefix) {
          next()
          return
        }
        const rel = decodeURIComponent(url.slice(prefix.length))
        const file = path.join(originalsDir, rel)
        if (!file.startsWith(originalsDir) || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
          next()
          return
        }
        res.setHeader('Content-Type', types[path.extname(file).toLowerCase()] ?? 'application/octet-stream')
        fs.createReadStream(file).pipe(res)
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), originalsPlugin()],
  base: '/myhomesinal-remake-preview/',
})
