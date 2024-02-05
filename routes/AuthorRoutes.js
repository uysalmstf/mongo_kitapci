const express = require("express")
const router = express.Router()
const AuthorController = require("../controller/AuthorController")
const isValidCreatePostData = require("../middlewares/Author/CreateMiddleware")

router.get("/list", AuthorController.list)
router.post("/create", isValidCreatePostData, AuthorController.create)

module.exports = router