const Register = require('../models/register');

// Controller to handle user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Register.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Login failed' });
    }
    const { name } = user;
    res.json({ message: 'Login successful',name });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Login failed' });
  }
};

module.exports = {
  loginUser,
};
