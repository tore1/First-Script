const fs = require('fs')

const api = require('./lib/api')

fs.writeFileSync(
  `${__dirname}/data/ships.csv`,
  'id,name\n' + api.start.api_mst_ship.map(ship => `${ship.api_id},${ship.api_name}`).join('\n')
)
