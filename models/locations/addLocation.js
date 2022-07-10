const { v4 } = require('uuid')
const getAll = require('./getAll')
const updatelocations = require('./updateLocations')
const addlocation = async (data) => {
  const locations = await getAll()
  const newlocation = { ...data, id: v4() }
  locations.push(newlocation)
  await updatelocations(locations)
  return locations
}
module.exports = addlocation
