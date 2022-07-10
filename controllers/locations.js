const Joi = require('joi')

const locationOperation = require('../models/locations')

const joiSchema = Joi.object({
  lat: Joi.required(),
  lon: Joi.required(),
  date: Joi.required()
})

const addLocation = async (req, res, next) => {
  try {
    const { error } = joiSchema.validate(req.body)

    if (error) {
      console.log(error.message)
    }
    const result = await locationOperation(req.body)
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