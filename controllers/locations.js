const {location} = require('../models')

const addLocation = async (req, res, next) => {
  try {
    const { error } = location.joiSchema.validate(req.body)

    if (error) {
      console.log(error.message)
    }
    const result = await location.Location.create(req.body)
    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        result
      }
    })
  } catch (error) {
    
  }
}

module.exports = {
    addLocation
}