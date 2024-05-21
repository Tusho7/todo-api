import express from 'express';
import { authenticateToken, authorizeRole } from '../middlewares/auth.js';
const userRoutes = express.Router();

userRoutes.post('/create', authenticateToken, authorizeRole(['admin']), async (req, res) => {
    try {
  
        const newResource = new Resource({

            name: req.body.name,
            description: req.body.description,
            assignee: req.body.assignee,
      
        });

    
        await newResource.save();

 
        res.status(201).json({ message: 'Resource created successfully', resource: newResource });
    } catch (error) {
 
        console.error('Error creating resource:', error);
        res.status(500).json({ message: 'Failed to create resource', error: error.message });
    }
});

export default userRoutes;
