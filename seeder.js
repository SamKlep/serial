const fs = require('fs')
const mongoose = require('mongoose')
const path = require('path')
const colors = require('colors')
const dotenv = require('dotenv')
// email

// Load env vars
dotenv.config()

// Load models
const Serial = require('./backend/models/Serial')

// Connect to DB
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
})

// Read JSON files
const serials = JSON.parse(
  fs.readFileSync(`${__dirname}/data/serials.json`, 'utf-8')
)

// Import into DB
const importData = async () => {
  try {
    await Serial.create(serials)

    console.log('Data Imported...'.green.inverse)
    process.exit()
  } catch (err) {
    console.log(err)
  }
}

// Delete data
const deleteData = async () => {
  try {
    await Serial.deleteMany()

    console.log('Data Destroyed...'.red.inverse)
    process.exit()
  } catch (err) {
    console.log(err)
  }
}

if (process.argv[2] === '-i') {
  importData()
} else if (process.argv[2] === '-d') {
  deleteData()
}
