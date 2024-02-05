const mongoose = require("mongoose")

const dotenv = require('dotenv');
dotenv.config();

const connectDB = () => {
    try {
      mongoose.connect(process.env.MONGO_URL).catch((err) => {
        console.log(err)
      });

      mongoose.connection.on('connected', () => {
          console.log('Mongoose connected');
        });
      mongoose.connection.on('error', (err) => {
        console.log('Mongoose connection error: ' + err);
      });
          
    } catch (error) {
      console.log("conn errr: " + error)
    }
   
}

module.exports = connectDB