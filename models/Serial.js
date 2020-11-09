const mongoose = require('mongoose')

const SerialSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    alias: {
      type: String,
    },
    name: {
      type: String,
    },
    bio: {
      type: String,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Serial', SerialSchema)
