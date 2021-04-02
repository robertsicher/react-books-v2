const router = require('express').Router();
let Book = require('../models/books.models'); 

router.route('/').get((req, res) => {
    Book.find()
        .then (books => res.json(books))
        .catch(err => res.status (400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {

    const title = req.body.title;
    const author = req.body.author;
    const image = req.body.image;
    const link = req.body.link;

    const newBook = new Book({
        title,
        author,
        image,
        link,
        
    });

    newBook.save()
        .then ( () => res.json('User added!'))
        .catch(err => res.status (400).json('Error: ' + err));
});

router.route('/:id').get((req,res) => {
    Book.findById(req.params.id)
    .then((book) => res.json(book))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req,res) => {
    Book.findByIdAndDelete(req.params.id)
    .then(() => res.json('Book Deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;