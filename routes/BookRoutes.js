const express = require("express")
const router = express.Router()
const BookController = require("../controller/BookController")
const isValidCreatePostData = require("../middlewares/Book/CreateMiddleware")
const isValidEditPostData = require("../middlewares/Book/EditMiddleware")
const isValidDeletePostData = require("../middlewares/Book/DeleteMiddleware")

router.get("/list", BookController.list)
router.post("/create", isValidCreatePostData, BookController.create)
router.post("/delete", isValidDeletePostData, BookController.deleteBook)
router.post("/update", isValidEditPostData, BookController.updateBook)

module.exports = router