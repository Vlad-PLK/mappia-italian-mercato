import { readFileSync } from 'node:fs'
import assert from 'node:assert/strict'

const app = readFileSync(new URL('../src/App.jsx', import.meta.url), 'utf8')
const content = readFileSync(new URL('../src/content.js', import.meta.url), 'utf8')

for (const id of ['#home', '#traiteur', '#suggestions', '#epicerie', '#contact']) {
  assert.ok(app.includes(`href=\"${id}\"`) || app.includes(`id=\"${id.slice(1)}\"`), `missing anchor or section for ${id}`)
}

for (const token of ['Trattoria Moderna', 'Suggestions du Jour', 'Traiteur', 'Epicerie']) {
  assert.ok((app + content).includes(token), `missing token: ${token}`)
}

console.log('structure:ok')
