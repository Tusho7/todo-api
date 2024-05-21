import express from 'express';
import { addTaskAssignee, createResource, deleteTask, editDescription, editTitle, getTasks, getTasksByUserId, markTaskAsComplete, uncompleteTask } from '../controllers/resourceController.js';
import { authenticateToken, authorizeRole } from '../middlewares/auth.js';

const resourceRouter = express.Router();

resourceRouter.post('/', authenticateToken, authorizeRole(['admin']), createResource);

resourceRouter.get('/', authenticateToken, authorizeRole(['admin', 'user']), getTasks); 

resourceRouter.get('/user-tasks/:id', authenticateToken, getTasksByUserId);

resourceRouter.delete('/:id', authenticateToken, deleteTask);

resourceRouter.patch('/:id', authenticateToken, authorizeRole(['admin']), editTitle);

resourceRouter.patch('/:id', authenticateToken, authorizeRole(['admin']), editDescription);

resourceRouter.patch('/:id/assignee', authenticateToken, authorizeRole(['admin']), addTaskAssignee);

resourceRouter.patch('/:id/complete', authenticateToken, markTaskAsComplete);

resourceRouter.patch("/:id/uncomplete", authenticateToken, uncompleteTask )


export default resourceRouter;
