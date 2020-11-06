const asyncHandler = require('express-async-handler')
const Serial = require('../models/Serial')

// @ desc       Fetch all serials
// @route       GET /api/serials
// @access      Public
const getSerials = asyncHandler(async (req, res) => {
  const serials = await Serial.find({})

  res.json(serials)
})

// @ desc       Fetch single serial
// @route       GET /api/serials/:id
// @access      Public
const getSerialById = asyncHandler(async (req, res) => {
  const serial = await Serial.findById(req.params.id)

  if (serial) {
    res.json(serial)
  } else {
    res.status(404)
    throw new Error('Serial not found')
  }
})

module.exports = { getSerials, getSerialById }
