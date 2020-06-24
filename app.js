const express = require('express');
var logger = require('morgan');
var path = require('path');
const app = express();
const todoRoutes = require('./routes/todo');

require('./db');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 5555;

app.use('/', todoRoutes);

app.listen(port, () => {
	console.log(`Todo app start at ${port}`);
});
