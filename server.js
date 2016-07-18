'use strict'

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./database.js');
app.use(bodyParser.json())
app.use(express.static('./client'));


app.get('/meals', function(req, res) {
  db.getAll(function (meals){
      res.json(meals)
    });
});

app.post('/meals',function(req, res) {
  db.addNewMeal(req, function (result) {
   res.json(result);
 });
});

app.listen(3000);
