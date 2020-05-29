const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    task: {
        type: String
    },
    isEdit: {
        type: Boolean,
        default: false
    }
});

module.exports = new mongoose.model('todo', todoSchema, 'todos');