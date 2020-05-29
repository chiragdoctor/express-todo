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

router.get('/edit/:id', async (req, res) => {
    const id = req.params.id
    console.log('id', id)
    try {
        const update_result = await Todo.findOneAndUpdate({_id: id}, {$set: { isEdit: true } }, { useFindAndModify: true });
        console.log('update_results', update_result);
        const todos = await Todo.find({});
        res.render('edit', {todos});
    } catch(err) {
        res.send(err);
    }
    
});

router.post('/edit/:id', (req, res) => {
    const id = req.params.id
    const { task } = req.body;
    Todo.findOneAndUpdate({_id: id}, {$set: { task: task, isEdit: false } }, { useFindAndModify: false }, (err) => {
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