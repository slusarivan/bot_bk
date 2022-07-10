const fs = require('fs/promises')
const codesPath = require('./codesPath')

const updateCodes = async (newCodes) => {
  const codesStr = JSON.stringify(newCodes)
  await fs.writeFile(codesPath, codesStr)
}
module.exports = updateCodes
