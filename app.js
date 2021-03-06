const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const fs = require('fs');
const cors = require('cors');
const dotenv = require('dotenv');
const chalk = require('chalk')
dotenv.config();



mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log(chalk.yellow.bold('DB Connected')));

mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`);
});




//bring in routes
const addRoutes = require('./routes/add');
const fetchRoutes = require('./routes/fetch');
const removeRoutes = require('./routes/remove');


//Middleware
app.use(bodyParser.json())
app.use(cookieParser())
app.use(morgan('dev'))
app.use(expressValidator())
app.use(cors())
app.use(addRoutes); 
app.use(fetchRoutes)
app.use(removeRoutes)

app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401).json({error: "unauthorised"});
    }
  });


app.use(function(err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({ error: 'Unauthorized!' });
    }
});



const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`A Node Js API is listening on port: ${port}`);
});