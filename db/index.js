const mongoose = require('mongoose');

mongoose.connect(
	'mongodb+srv://chirag:chirag@cluster0-6cdwg.mongodb.net/todo-app?retryWrites=true&w=majority',
	{ useNewUrlParser: true, useUnifiedTopology: true },
	(err) => {
		if (err) {
			throw err;
		} else {
			console.log(`DB Connected!!`);
		}
	},
);
