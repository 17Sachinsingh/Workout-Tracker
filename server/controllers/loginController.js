const Register = require('../models/register'); // Assuming your model is in "models/register.js"

// Controller to handle user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Register.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Login failed' });
    }

    res.json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Login failed' });
  }
};

module.exports = {
  loginUser,
};
