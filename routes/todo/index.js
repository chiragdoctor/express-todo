const express = require('express');
const router = express.Router();
const Todo = require('../../db/models/todo');

router.get('/', (req, res) => {
    Todo.find({})
    .then((err, todos) => {
        if(err) {
            res.send(err);
        }
        res.send(todos);
    })
});

router.post('/add', (req, res) => {
    const todo = new Todo(req.body);
    todo.save((err) => {
        if(err) {
            res.send(err);
        } else {
            res.send(todo);
        }
    });
})

module.exports = router;