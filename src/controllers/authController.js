const jwt = require('jsonwebtoken');

// POST /auth/login - Generate JWT token
const login = async (req, res) => {
    try{
        const { username, password } = req.body;

        // For this test, I used hardcoded credentials
        if (username !== 'admin' || password !== 'admin') {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign(
            { username },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN }
        );
        return res.status(200).json({ token });
    } catch(error) {
        console.error('Error generating token', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};


module.exports = { login };