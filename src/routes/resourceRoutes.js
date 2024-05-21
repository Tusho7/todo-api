import express from 'express';
import { changeAssignee, createResource, deleteTask, editDescription, editTitle, getTasks } from '../controllers/resourceController.js';
import { authenticateToken, authorizeRole } from '../middlewares/auth.js';

const resourceRouter = express.Router();

resourceRouter.post('/', authenticateToken, authorizeRole(['admin']), createResource);

resourceRouter.get('/', authenticateToken, authorizeRole(['admin', 'user']), getTasks); 

resourceRouter.delete('/:id', authenticateToken, deleteTask);

resourceRouter.patch('/:id', authenticateToken, authorizeRole(['admin']), editTitle);

resourceRouter.patch('/:id', authenticateToken, authorizeRole(['admin']), editDescription);

resourceRouter.patch('/:id/assignee', authenticateToken, authorizeRole(['admin']), changeAssignee);

export default resourceRouter;
