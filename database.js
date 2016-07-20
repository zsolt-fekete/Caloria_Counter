'use strict';

const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sql',
  database: 'Caloria',
});


const dbQuerires = (function(con) {

  con.connect( function(err) {
    if (err) {
      console.log('Error connecting to Db');
      return;
    }
    console.log('Connection established');
  });

  function errorHandling(err) {
    if (err) {
      console.log(err.toString());
      return;
    }
  }

  function getAll(callback) {
    con.query('SELECT * FROM Caloria;', function(err ,meals){
      errorHandling(err);
      callback(meals);
    });
  }

  function addNewMeal(req, callback) {
   con.query("INSERT INTO Caloria (name, calories, date) VALUES ('" + req.body.name + "','" + req.body.calories + "','" + req.body.date + "')",
    function (err, result) {
      errorHandling(err);
      callback({status:"ok"});
   });
  }

  return {
    getAll,
    addNewMeal,
  }
}(con));

module.exports = dbQuerires;
