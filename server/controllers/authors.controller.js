const Author = require('../models/authors.model')


module.exports ={
    create: (req, res) => {
        Author.create([req.body])
            .then(created => res.json(created))
            .catch(err => res.status(400).json(err))
    },
    getAll: (req, res) => {
        Author.find({}).collation({locale:'en',strength: 2}).sort({authorName:1})
            .then(all => res.json(all))
            .catch(err => res.status(400).json(err))
    },
    getOne: (req, res) => {
        Author.findOne({ _id: req.params.id },
            req.body, {
                new: true,
                runValidator: true
            })
                .then((one) => res.json(one))
                .catch(err => res.status(400).json(err))
    },
    updateOne: (req, res) => {
        Author.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
            .then((update) => {res.json(update)})
            .catch(err => res.status(400).json(err))
    },
    delete: (req, res) => {
        Author.deleteOne({_id: req.params.id})
            .then(lessOne => res.json(lessOne))
            .catch(err => res.status(400).json(err))
    }
}