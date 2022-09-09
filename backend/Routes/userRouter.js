const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { validateToken } = require('../jwt');

const router = express.Router();
const { getUsers, deleteUsers } = require('../Controllers/userController');
//Routes list
router.get('/all', authMiddleware, validateToken, getUsers);
router.delete('/all', authMiddleware, deleteUsers);

module.exports = router;
