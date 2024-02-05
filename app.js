const winston = require("winston");
const express = require('express');
const dotenv = require('dotenv');
const BookRoutes = require("./routes/BookRoutes")
const AuthorRoutes = require("./routes/AuthorRoutes")

dotenv.config();
const app = express();


const connectDb = require('./config/db');
const Author = require("./models/Author");

const logger = winston.createLogger({
  transports: [new winston.transports.Console()],
});


try {
    connectDb();
    console.log('Server connected to MongoDb!');
} catch (error) {
    logger.debug("DB ye bağlanamadım -> "+ error)
}

const port = process.env.PORT

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/book', BookRoutes);
app.use('/author', AuthorRoutes);


app.listen(port, () => {
    console.log(`Server is running on port ` + port);
  });