import express from 'express';
import { authenticateToken, authorizeRole } from '../middlewares/auth.js';
import User from '../models/User.js'; 

const getUserRouter = express.Router();

getUserRouter.get('/', authenticateToken, authorizeRole(['admin']), async (req, res) => {
    try {
        const users = await User.find({}, 'username role'); 
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Failed to fetch users', error: error.message });
    }
});

export default getUserRouter;
