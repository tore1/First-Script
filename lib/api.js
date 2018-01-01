const fs = require('fs')

const parseSvdata = x => {
  const s = (x.body || x).toString()
  return JSON.parse(s.slice(s.indexOf('=') + 1)).api_data
}

const readSvdata = path => {
  return parseSvdata(fs.readFileSync(path))
}

const start = readSvdata(`${__dirname}/../data/api_start2`)

exports.parseSvdata = parseSvdata
exports.readSvdata = readSvdata
exports.start = start
