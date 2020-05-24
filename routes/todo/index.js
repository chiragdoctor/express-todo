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
});

router.put('/edit/:id', (req, res) => {
    const id = req.params.id
    const { title, description } = req.body;
    Todo.findOneAndUpdate({_id: id}, {$set: { title, description } }, { useFindAndModify: false }, (err) => {
        if(err) {
            res.send(err);
        } else {
            res.send('updated');
        }
    });
});


module.exports = router;