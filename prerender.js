import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// All routes to prerender for static site generation
const routesToPrerender = [
  '/',
  '/plano-de-negocios-para-restaurante',
  '/servicos',
  '/servicos/plano-de-negocios',
  '/servicos/pesquisa-e-analise-de-mercado',
  '/servicos/valuation',
  '/servicos/precificacao',
  '/servicos/analise-de-viabilidade-do-investimento',
  '/sobre-nos',
  '/cases-de-sucesso'
]

;(async () => {
  for (const url of routesToPrerender) {
    const appHtml = render(url);
    const html = template.replace(`<!--app-html-->`, appHtml)

    const filePath = `dist${url === '/' ? '/index' : url}.html`
    fs.mkdirSync(path.dirname(toAbsolute(filePath)), { recursive: true })
    fs.writeFileSync(toAbsolute(filePath), html)
    console.log('pre-rendered:', filePath)
  }
})()
