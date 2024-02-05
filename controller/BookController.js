const Book = require("../models/Book")
const Author = require("../models/Author")

const list = async (req, res, next) => {

    try {
        const books = await Book.find({});
        return res.status(200).json({
            message: "işlem başarılı",
            data: books
        })
    } catch (err) {
        console.error('Error retrieving books:', err);
    }
}

const create = async (req, res, next) => {

    try {

        const author = await Author.findById(req.body.author_id)

        const newBook = {
            title: req.body.title,
            author: author,
            price: req.body.price,
            isbn: req.body.isbn,
            lang: req.body.lang,
            page_number: req.body.page_number,
            publisher: req.body.publisher 
          };

        Book.create(newBook).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })

        return res.status(200).json({
            message: "işlem başarılı",
            data: newBook
        })
    } catch (err) {
        console.error('Error adding books:', err);
    }
}

const deleteBook = async (req, res, next) => {

    Book.deleteOne( { _id: req.body.id } ).then((result) => {
        console.log(result)
    })

    return res.status(200).json({
        message: "işlem başarılı",
        data: null
    })
}

const updateBook = async (req, res, next) => {
    try {

        const author = await Author.findById(req.body.author_id)

        const updatedBook = {
            title: req.body.title,
            author: author,
            price: req.body.price,
            isbn: req.body.isbn,
            lang: req.body.lang,
            page_number: req.body.page_number,
            publisher: req.body.publisher 
          };
          console.log(updatedBook)
        Book.findOneAndUpdate({_id: req.body.id}, updatedBook, {
            new: true
          }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })

        return res.status(200).json({
            message: "işlem başarılı",
            data: updatedBook
        })
    } catch (err) {
        console.error('Error adding books:', err);
    }

}


module.exports = {
    list,
    create,
    deleteBook,
    updateBook
}