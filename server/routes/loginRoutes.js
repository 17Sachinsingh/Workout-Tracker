const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

// POST: /api/login
router.post('/', loginController.loginUser);

module.exports = router;
