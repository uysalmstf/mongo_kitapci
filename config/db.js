const mongoose = require("mongoose")

const dotenv = require('dotenv');
dotenv.config();

const connectDB = () => {
   // dbURI = 'mongodb://172.19.0.2:27017/mongotest'
    try {
      mongoose.connect(process.env.MONGO_URL).catch((err) => {
        console.log(err)
      });

      mongoose.connection.on('connected', () => {
          console.log('Mongoose connected');
        });
    } catch (error) {
      console.log("conn errr: " + error)
    }
   
}

module.exports = connectDB