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

  function getdata(req, callback) {
    if (req.query.key1 === undefined) {
       getAll(req, callback);
    } else if (req.query.key1 !== undefined) {
      getFiltered(req, callback);
    }
  }

  function getAll(req, callback) {
    con.query('SELECT * FROM Caloria', function(err ,meals){
      errorHandling(err);
      callback(meals);
    });
  }

  function getFiltered(req, callback) {
    con.query('SELECT * FROM Caloria WHERE Caloria.date LIKE ' + '"' + req.query.key1 + '%' + '";',
     function(err ,meals){
      errorHandling(err);
      callback(meals);
    });
  }

  function addNewMeal(req, callback) {
   con.query("INSERT INTO Caloria (name, calories, date) VALUES ('" + req.body.name + "','" + req.body.calories + "','" + req.body.date + "')",
    function (err, result) {
      errorHandling(err);
      callback({id:result.insertId, status:"ok"});
   });
  }

  function deleteMeal(id, callback) {
    con.query('DELETE FROM Caloria WHERE id ='+id, function(err,response){
      errorHandling(err);
      if (response.affectedRows === 1) {
        callback({status:"ok"});
      } else if (response.affectedRows === 0) {
        callback({status: "not exists"});
      }
  });
}

  return {
    getdata,
    addNewMeal,
    deleteMeal,
  }
}(con));

module.exports = dbQuerires;
