const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { login } = require('../controllers/authController');

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Generate JWT token
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 example: admin
 *               password:
 *                 type: string
 *                 example: admin
 *     responses:
 *       200:
 *         description: Token generated successfully
 *       401:
 *         description: Invalid credentials
 *       500:
 *         description: Internal server error
 */

// POST /auth/login - Generate JWT token
router.post('/login', login);

module.exports = router;