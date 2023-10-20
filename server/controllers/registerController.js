const Register = require('../models/register'); // Assuming your model is in "models/register.js"

// Controller to handle user registration
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await Register.create({ name, email, password });
    res.json(user);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Registration failed' });
  }
};

module.exports = {
  registerUser,
};
