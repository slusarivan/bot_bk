const { Schema, model } = require('mongoose')
const Joi = require('joi')

const codeSchema = Schema({
    code: {
        type: String
    },
    date: {
        type: String
    }
})

const joiSchema = Joi.object({
  code: Joi.required(),
  date: Joi.required()
})

const Code = model("code", codeSchema)

module.exports = {
    Code,
    joiSchema
}