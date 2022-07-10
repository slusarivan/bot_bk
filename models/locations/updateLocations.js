const fs = require('fs/promises')
const locationsPath = require('./locationsPath')

const updatelocations = async (newlocations) => {
  const locationsStr = JSON.stringify(newlocations)
  await fs.writeFile(locationsPath, locationsStr)
}
module.exports = updatelocations
