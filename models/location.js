const { Schema, model } = require('mongoose')
const Joi = require('joi')

const locationSchema = Schema({
    lat: {
        type: String
    },
    lon: {
        type: String
    },
    date: {
        type: String
    }
})

const joiSchema = Joi.object({
  lat: Joi.required(),
  lon: Joi.required(),
  date: Joi.required()
})

const Location = model("location", locationSchema)

module.exports = {
    Location,
    joiSchema
}