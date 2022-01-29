const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/Pets", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log('Established connection to database'))
	.catch(err => console.log('Bad database connection', err));
