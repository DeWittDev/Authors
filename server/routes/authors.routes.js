const AppController = require('../controllers/authors.controller');

module.exports = (app) => {
	app.get('/api/authors', AppController.getAll)
	app.post('/api/authors', AppController.create)
	app.get('/api/authors/:id', AppController.getOne)
	app.put('/api/authors/:id', AppController.updateOne)
	app.delete('/api/authors/:id', AppController.delete)
}