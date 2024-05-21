
import Resource from '../models/resourceSchema.js';


export const createResource = async (req, res) => {
    try {
        const { name, description, assignee } = req.body;
        const newResource = new Resource({ name, description, assignee });
        await newResource.save();
        res.status(201).json({ message: 'Resource created successfully', resource: newResource });
    } catch (error) {
        console.error('Error creating resource:', error);
        res.status(500).json({ message: 'Failed to create resource', error: error.message });
    }
};

export const getTasks = async (req, res) => {
    try {
        const tasks = await Resource.find().populate('assignee', 'username');
        res.json(tasks);
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ message: 'Failed to fetch tasks', error: error.message });
    }
};

export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedResource = await Resource.findByIdAndDelete(id);
        if (!deletedResource) {
            return res.status(404).json({ message: 'Resource not found' });
        }
        res.status(200).json({ message: 'Resource deleted successfully' });
    } catch (error) {
        console.error('Error deleting resource:', error);
        res.status(500).json({ message: 'Failed to delete resource', error: error.message });
    }
};

export const editTitle = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const updatedResource = await Resource.findByIdAndUpdate(id, { name }, { new: true });
        if (!updatedResource) {
            return res.status(404).json({ message: 'Resource not found' });
        }
        res.status(200).json({ message: 'Resource title updated successfully', resource: updatedResource });
    } catch (error) {
        console.error('Error editing resource title:', error);
        res.status(500).json({ message: 'Failed to edit resource title', error: error.message });
    }
};

export const editDescription = async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updatedResource = await Resource.findByIdAndUpdate(id, { description }, { new: true });
        if (!updatedResource) {
            return res.status(404).json({ message: 'Resource not found' });
        }
        res.status(200).json({ message: 'Resource description updated successfully', resource: updatedResource });
    } catch (error) {
        console.error('Error editing resource description:', error);
        res.status(500).json({ message: 'Failed to edit resource description', error: error.message });
    }
};

export const changeAssignee = async (req, res) => {
    try {
        const { id } = req.params;
        const { assignee } = req.body;
        const updatedResource = await Resource.findByIdAndUpdate(id, { assignee }, { new: true });
        if (!updatedResource) {
            return res.status(404).json({ message: 'Resource not found' });
        }
        res.status(200).json({ message: 'Assignee changed successfully', resource: updatedResource });
    } catch (error) {
        console.error('Error changing assignee:', error);
        res.status(500).json({ message: 'Failed to change assignee', error: error.message });
    }
};
