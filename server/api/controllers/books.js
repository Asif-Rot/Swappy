const mongoose = require("mongoose");

const Books = require("../models/books");

exports.all_book =  (req, res) => {
    Books.find()
        .then(books => {
            res.status(200).json(books);
        }).catch(error => {
        res.status(500).json({
            error
        });
    });
}

exports.one_book = (req, res) => {
    const bookId = req.params.bookId;
    Books.findById(bookId)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Not found book with id " + bookId });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving Book with id=" + bookId });
        });
};

exports.update_book = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const bookId = req.params.bookId;

    Books.findByIdAndUpdate(bookId, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Book with id=${bookId}. Maybe Book was not found!`
                });
            } else res.send({ message: "Book was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Book with id=" + bookId
            });
        });
};


exports.delete_book = async (req, res, nex) => {
    const bookId = req.params.bookId;
    Books.find({_id: bookId}).then((book) => {
        if (!book) {
            return res.status(404).json({
                message: 'Book was not found'
            })
        } else {
            Books.deleteOne({_id: bookId.toString()}).exec().then(() => {
                res.status(200).json({
                    message: `book id :  ${bookId} deleted`
                })
            })
        }
    }).catch(error => {
        res.status(500).json({
            error
        })
    });
}

exports.add_newBook = (req, res, next) => {
    console.log('new book')
    Books.find({name: req.body.name})
        .exec()
        .then(book => {
            if (book.length >= 1) {
                return res.status(409).json({
                    message: "Book exists"
                });
            } else {
                const newBook = new Books(
                    {
                        _id: new mongoose.Types.ObjectId(),
                        name: req.body.name,
                        book_condition: req.body.book_condition,
                        author: req.body.author,
                        genre: req.body.genre,
                        description: req.body.description
                    }
                );
                newBook.save().then(result => {
                    res.status(201).json({
                        message: "succeded adding a book"
                    });
                })
                    .catch(err => {
                        res.status(500).json({
                            error: err
                        });
                    });
            }
        });

}
