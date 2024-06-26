import mongoose from 'mongoose';

const resourceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    assignee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },
    completed: {
        type: Boolean,
        default: false,
      },
});

const Resource = mongoose.model('Resource', resourceSchema);

export default Resource;
