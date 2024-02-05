const { default: mongoose } = require("mongoose");
const Author = require("../models/Author");
const { error } = require("winston");
const ObjectId = mongoose.Types.ObjectId;

const list = async (req, res, next) => {

    try {
        const authors = await Author.find({});
        return res.status(200).json({
            message: "Yazar Çekme İşlemi Başarılı",
            data: authors
        })
    } catch (err) {
      console.log("Yazar Getirme Hatası -> ", error)

      response.status(403).json({
        'error': true,
        'message': "Yazar Getirme Hatası",
        'data': err
      });
    }
}

const create = async (req, res, next) => {

    const data = req.body

    try {
      const newAuthor = new Author({
        name: data.name,
        country: data.country,
        birth_date: data.birth_date
      });
    
      // Save the new book to the database
      let id = newAuthor.save().then((result) => {
        return result
      }).catch((error) => {
        //console.log("author insert err: ", error);
        return 0;
      })

      if (id == 0) {
        response.status(403).json({
          'error': true,
          'message': "Yazar Ekleme Hatası",
          'data': null
        });
      } else {
        response.status(200).json({
          'error': false,
          'message': "Yazar Ekleme Başarılı",
          'data': null
        });
      }

    } catch (error) {
      
      console.log("Yazar Ekleme Hatası -> ", error)

      response.status(403).json({
        'error': true,
        'message': "Yazar Ekleme Hatası",
        'data': error
      });
    }
    
    mongoose.disconnect();
}
module.exports = {
    list,
    create
}