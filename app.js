const express = require('express');
const app = express();
const todoRoutes = require('./routes/todo');

require('./db');

const port = process.env.PORT || 5555;


app.use('/todo', todoRoutes);

app.listen(port, () => {
    console.log(`Todo app start at ${port}`);
})