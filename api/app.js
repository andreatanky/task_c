const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feed');

const app = express();

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(express.json()); // application/json

app.use('/feed', feedRoutes);

app.use((req, res, next) => {
    res.status(404).send({
    status: 404,
    error: "Not found"
    })
   })
   

app.listen(8080);