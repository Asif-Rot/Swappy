const express = require("express");
const router = express.Router();

const booksController = require('../controllers/books');

router.post("/:id", booksController.showBook)
router.delete("/:id", booksController.delete_book)

module.exports = router;