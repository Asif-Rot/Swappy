const express = require("express");
const router = express.Router();

const booksController = require('../controllers/books');

router.post("/addbook", booksController.add_newBook);

router.get("/allbook", booksController.all_book);

router.delete("/:bookId", booksController.delete_book);
module.exports = router;