const express = require('express');
const router = express.Router();
const Todo = require('../../db/models/todo');

router.get('/', async (req, res) => {
    const todos = await Todo.find({})
    res.render('index', {todos})
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

router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    Todo.deleteOne({_id: id}, (err) => {
        if(err) {
            res.send(err);
        } else {
            res.send('task deleted!!');
        }
    }); 
});

module.exports = router;