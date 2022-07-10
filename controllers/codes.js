const Joi = require('joi')

const codeOperation = require('../models/codes')

const joiSchema = Joi.object({
  code: Joi.required(),
  date: Joi.required()
})

const addCode = async (req, res, next) => {
  try {
    const { error } = joiSchema.validate(req.body)

    if (error) {
      console.log(error.message)
    }
    const result = await codeOperation(req.body)
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
    addCode
}