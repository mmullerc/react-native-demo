'use strict';
import db from '../../db'

//Gets all cars
module.exports.getCars = function(req, res) {
  let query = 'SELECT * from cars.car';

  db.query(query, function (error, results, fields) {
    if (error) {
      errorHandler(error, res);
    } else {
      res.send(results);
    }
  });
};

//Gets car by id
module.exports.getCarById = function(req, res) {
  let query = 'SELECT * from cars.car WHERE idCar =' + db.escape(req.body.id);

  db.query(query, function (error, results, fields) {
    if (error) {
      errorHandler(error, res);
    } else {
      res.send(results);
    }
  });
};

//Creates a car
module.exports.createCar = function(req, res) {
  let query = 'INSERT INTO cars.car SET ?';

  db.query(query, req.body, function (error, results, fields) {
    if (error) {
      errorHandler(error, res);
      console.log(error);
    } else {
      res.send(results);
    }
  });
};

//Updates a car
module.exports.updateCar = function(req, res) {
  let query = 'UPDATE cars.car SET name = ?, brand = ?, type = ?, cost = ?, model = ?, image = ? WHERE idCar = ?';
  let {name, brand, type, cost, model, image} = req.body;
  db.query(query,[name, brand, type, cost, model, image, req.body.id], function (error, results, fields) {
    if (error) {
      errorHandler(error, res);
      console.log(error);
    } else {
      res.send(results);
    }
  });
}

//Deletes a car
module.exports.deleteCar = function(req, res) {
  let query = 'DELETE from cars.car WHERE idCar =' + db.escape(req.body.id);

  db.query(query, function (error, results, fields) {
    if (error) {
      errorHandler(error, res);
    } else {
      res.send(results);
    }
  });
};

//Error Handling
function errorHandler(err, res){
  console.log('Server Error');
  res.send(err);
}
