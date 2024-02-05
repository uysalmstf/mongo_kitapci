const Book = require("../models/Book")
const Author = require("../models/Author")

const list = async (req, res, next) => {

    try {
        const books = await Book.find({});
        return res.status(200).json({
            error: false,
            message: "işlem başarılı",
            data: books
        })
    } catch (err) {
        console.error('Kitap Listeleme Hatası -> ', err);

        response.status(403).json({
            'error': true,
            'message': "Kitap Listeleme Hatası",
            'fields': err
          });
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

          try {
            let result = Book.create(newBook)
            if (result != null) {
                return res.status(200).json({
                    'error': false,
                    'message': "Kitap Ekleme Başarılı",
                    'data': null
                })
            }
            response.status(200).json({
                'error': true,
                'message': "Kitap Ekleme Hatası",
                'data': null
            });
          } catch (error) {
            console.error('Kitap Ekleme Hatası (ekleme anı) -> ', err);

            response.status(403).json({
                'error': true,
                'message': "Kitap Ekleme Hatası",
                'data': err
            });
          }

    } catch (err) {
        console.error('Kitap Ekleme Hatası -> ', err);

        response.status(403).json({
            'error': true,
            'message': "Kitap Ekleme Hatası",
            'data': err
          });
    }
}

const deleteBook = async (req, res, next) => {

    try {
        let result = await Book.deleteOne( { _id: req.body.id } ) 
        if (result != null) {
            return res.status(200).json({
                'error': false,
                'message': "Kitap Silme Başarılı",
                'data': null
            })   
        }
        return res.status(200).json({
            'error': true,
            'message': "Kitap Silme Başarısız",
            'data': null
        })   
        
    } catch (error) {
        console.log("Kitap Silme Hatası -> ", error)

        return res.status(403).json({
            'error': true,
            'message': "Kitap Silme Başarısız",
            'data': error
        })   
    }
    

    
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

          try {
            let result = Book.findOneAndUpdate({_id: req.body.id}, updatedBook);
              if (result != null) {
                return res.status(200).json({
                    'error': false,
                    'message': "İşlem Başarılı",
                    'data': null
                })
              }
              return res.status(200).json({
                'error': true,
                'message': "İşlem Başarısız",
                'data': null
            })
          } catch (error) {
            console.error('Kitap Güncelleme Hatası -> ', error);
        
            return res.status(403).json({
                'error': true,
                'message': "Kitap Güncelleme Başarısız",
                'data': error
            })  
          }
        
    } catch (err) {
        
        console.error('Error adding books:', err);
        
        return res.status(403).json({
            'error': true,
            'message': "Kitap Güncelleme Başarısız",
            'data': err
        })  
    }

}


module.exports = {
    list,
    create,
    deleteBook,
    updateBook
}