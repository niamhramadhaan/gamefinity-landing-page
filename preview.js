const { spawn } = require('child_process')
const { existsSync, mkdirSync, writeFileSync } = require('fs')
const path = require('path')
const http = require('http')

const PORT = 3001
const ROOT = 'D:\\backup project\\gamefinity.id 4'

function waitForPort(port, timeout = 30000) {
  return new Promise((resolve, reject) => {
    const start = Date.now()
    const check = () => {
      const req = http.get(`http://localhost:${port}`, res => resolve())
      req.on('error', () => {
        if (Date.now() - start > timeout) reject(new Error('timeout'))
        else setTimeout(check, 500)
      })
    }
    check()
  })
}

async function main() {
  console.log('Starting Next.js dev server...')
  const server = spawn('node', ['node_modules/.bin/next', 'dev', '-p', String(PORT)], {
    cwd: ROOT,
    stdio: ['ignore', 'pipe', 'pipe'],
    detached: true,
  })

  server.stdout.on('data', d => process.stdout.write(d))
  server.stderr.on('data', d => process.stderr.write(d))

  try {
    console.log('Waiting for server...')
    await waitForPort(PORT)
    console.log('Server ready. Taking screenshot...')

    const { chromium } = require('playwright')
    const browser = await chromium.launch({ headless: true })
    const page = await browser.newPage()
    await page.setViewportSize({ width: 1280, height: 800 })
    await page.goto(`http://localhost:${PORT}`, { waitUntil: 'networkidle' })

    const screenshot = await page.screenshot({ fullPage: false })
    const outPath = path.join(ROOT, 'public', 'hero-preview.png')
    writeFileSync(outPath, screenshot)
    console.log('Screenshot saved to:', outPath)

    await browser.close()
    server.kill()
    process.exit(0)
  } catch (e) {
    console.error('Error:', e.message)
    server.kill()
    process.exit(1)
  }
}

main()