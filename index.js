const express = require('express');

const app = express();

const port = 4047;


// les statiques
app.use(express.static('public'));


// le routage
const router = require('./app/router');
app.use(router);


app.listen( port,  () => {
    console.log(`Listening on ${port}`);
  });