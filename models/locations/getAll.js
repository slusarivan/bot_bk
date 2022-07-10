const fs = require('fs/promises')
const locationsPath = require('./locationsPath')
const getAll = async () => {
  const data = await fs.readFile(locationsPath)
  const locations = JSON.parse(data)
  return locations
}

module.exports = getAll
