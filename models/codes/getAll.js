const fs = require('fs/promises')
const codesPath = require('./codesPath')
const getAll = async () => {
  const data = await fs.readFile(codesPath)
  const codes = JSON.parse(data)
  return codes
}

module.exports = getAll
