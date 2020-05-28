const express = require('express');
const router = express.Router();
const Todo = require('../../db/models/todo');

router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find({})
        res.render('index', {todos})
    } catch (err) {
        res.send(err);
    }
    
});

router.post('/add', async (req, res) => {
    try {
        console.log(req.body);
        const todo = new Todo(req.body);
        await todo.save();
        res.redirect('/todo');
    } catch(err) {
        res.send(err);
    }
    

});

router.post('/edit/:id', (req, res) => {
    const id = req.params.id
    const { task } = req.body;
    Todo.findOneAndUpdate({_id: id}, {$set: { task } }, { useFindAndModify: false }, (err) => {
        if(err) {
            res.send(err);
        } else {
            res.redirect('/todo');
        }
    });
});

router.post('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await Todo.deleteOne({_id: id});
        res.redirect('/todo');
    } catch(err) {
        res.send(err)
    }
    
     
});

module.exports = router;