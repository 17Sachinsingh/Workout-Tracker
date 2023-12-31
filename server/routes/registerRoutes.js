const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');

// POST: /api/register
router.post('/', registerController.registerUser);

module.exports = router;
