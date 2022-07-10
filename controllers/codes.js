const {code} = require('../models')

const addCode = async (req, res, next) => {
  try {
    const { error } = code.joiSchema.validate(req.body)

    if (error) {
      console.log(error.message)
    }
    const result = await code.Code.create(req.body)
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