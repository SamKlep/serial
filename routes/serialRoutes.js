const express = require('express')

const router = express.Router()

const { getSerials, getSerialById } = require('../controllers/serialController')

// @ desc       Fetch all serials
// @route       GET /api/serials
// @access      Public
router.route('/').get(getSerials)

// @ desc       Fetch single serial
// @route       GET /api/serials/:id
// @access      Public
router.route('/:id').get(getSerialById)

module.exports = router
