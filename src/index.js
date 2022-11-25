const express = require('express');
const dotenv = require('dotenv').config();
const { connect } = require('mongoose');

const app = express();

const contactRoutes = require('./routes/contactRoutes');
const dbconnection = require('../config/dbconfig');
const {errorHandler} =  require('./middleware/errorMiddleware');
const PORT = process.env.PORT || 5000;


//middleware so the server can parse json data
app.use(express.json())
app.use(express.urlencoded({ extended: false}));

app.use('/api', contactRoutes);

app.use(errorHandler);

dbconnection();


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
