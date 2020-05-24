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


module.exports = router;