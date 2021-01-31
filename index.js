require('dotenv').config();

const express = require('express');

const app = express();

const port = process.env.PORT || 5000;


// les statiques
app.use(express.static('public'));


// le routage
const router = require('./app/router');
app.use(router);


app.listen( port,  () => {
    console.log(`Listening on ${port}`);
  });