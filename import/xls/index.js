const xlsx = require('node-xlsx');
const fs = require('fs')

const obj = xlsx.parse(fs.readFileSync(__dirname + '/data.xls'));
const data = obj[0].data

const c = console.log

const records = []
data
  .forEach(line => {
    const text = line[1]
    const type = line[2]
    const m = text.match(/https:\/\/t\.me\/([a-zA-Z_0-9]+)/m)
    if (!m) {
      return
    }
    const nick = m[1]
    records.push({
      nick,
      text,
      type
    })
    console.log(type)
  })
fs.writeFileSync(__dirname + '/../scrap/records.json', JSON.stringify(records))
console.log(records.length + ' records processed')
