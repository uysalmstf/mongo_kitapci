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
        console.error('Error retrieving authors:', err);
    }
}

const create = async (req, res, next) => {

    const data = req.body

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
      console.log(id)

      if (id == 0) {
        return res.status(200).json({
            message: "Yazar Ekleme İşlemi Başarısız",
        })
      } else {
        return res.status(200).json({
            message: "Yazar Ekleme İşlemi Başarılı",
        })
      }

    mongoose.disconnect();
}
module.exports = {
    list,
    create
}