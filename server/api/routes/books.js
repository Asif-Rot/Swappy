const express = require("express");
const router = express.Router();

const booksController = require('../controllers/books');

router.post("/addbook", booksController.add_newBook);

router.post("/updatebook/:bookId", booksController.update_book);

router.get("/allbook", booksController.all_book);

router.get("/:bookId", booksController.one_book);

router.delete("/:bookId", booksController.delete_book);

module.exports = router;