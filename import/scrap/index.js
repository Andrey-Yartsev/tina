import fetch from 'node-fetch';
import {parse} from 'node-html-parser'
import * as fs from 'fs'

let records = JSON.parse(fs.readFileSync(import.meta.dirname + '/records.json'))
let newRecords = []
for (let i=0; i<records.length; i++) {
  let v = records[i]
  const url = 'https://t.me/s/' + v.nick
  const response = await fetch(url)
  const body = await response.text()
  const root = parse(body)
  const r = root.querySelector('.tgme_page_photo_image > img')
  if (!r || !r.rawAttrs) {
    continue
  }
  const img = r.rawAttrs.replace(/src="(.+)"/, '$1')
  newRecords.push({
    nick: v.nick,
    text: v.text,
    type: v.type,
    img
  })
  // await downloadFile(img)
  process.stdout.write('.')
}
fs.writeFileSync(import.meta.dirname + '/../../src/data/messages.json', JSON.stringify(newRecords))
console.log('done')
