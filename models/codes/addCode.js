const { v4 } = require('uuid')
const getAll = require('./getAll')
const updateCodes = require('./updateCodes')
const addCode = async (data) => {
  const codes = await getAll()
  const newCode = { ...data, id: v4() }
  codes.push(newCode)
  await updateCodes(codes)
  return codes
}
module.exports = addCode
