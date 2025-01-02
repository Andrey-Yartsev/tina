import fetch from 'node-fetch';
import {parse} from 'node-html-parser'
import * as fs from 'fs'

let records = [
  'https://nacmp.ru/reestr-chlenov-naczionalnoj-assocziaczii-speczialistov-metafizicheskih-praktik/'
]
let newRecords = []
for (let i=0; i<records.length; i++) {
  let url = records[i]
  const response = await fetch(url)
  const body = await response.text()
  const root = parse(body)
  const r = root.querySelectorAll('.jupiterx-post-body .elementor-widget-container .elementor-image-box-wrapper img')
  r.forEach(img => {
    const m = img.rawAttrs.toString().match(/ src="[^ "]+" /m)
    const v = m[0].replace(/src="(.*)"/, '$1').trim()
    newRecords.push(v)
  })
}
fs.writeFileSync(import.meta.dirname + '/../../src/data/sev.json', JSON.stringify(newRecords))
console.log('done')
