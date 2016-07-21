'use strict'

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./database.js');

app.use(bodyParser.json())
app.use(express.static('./client'));

app.get('/meals', function(req, res) {
  db.getdata(req, function (meals){
    res.json(meals)
  });
});

app.post('/meals',function(req, res) {
  db.addNewMeal(req, function (result) {
    res.json(result);
  });
});

app.delete('/meals/:id',function(req, res) {
  db.deleteMeal(req.params.id, function (result) {
    res.json(result);
  });
});

app.listen(3000);
