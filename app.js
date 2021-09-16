const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var cors = require("cors");
require('dotenv').config();

const feedRoutes = require('./routes/feed');
const authRoutes = require('./routes/auth')

const app = express();
app.use(cors());

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(express.json()); // application/json

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/feed', feedRoutes);
app.use('/auth', authRoutes);

app.use('/', (req, res, next) => {
    try {
        throw new Error("Invalid page!")
    }
    catch (error) {
        next(error)
    }
})

app.use((error, req, res, next) => {
   console.log(error);
   const status = error.statusCode || 500;
   const message = error.message;
   const data = error.data;
   res.status(status).json({message: "An error occured!", data: data});
})

mongoose.connect('mongodb+srv://andrea:password12345@cluster0.sa63u.mongodb.net/task_c?retryWrites=true&w=majority')
.then(result => {
    app.listen(8080);
}).catch(err => console.log(err));

module.exports = app;