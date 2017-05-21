'use strict';
import { Router } from 'express';
import carsController from './cars.controller';

let carsRouter = Router();

//Intercepts and adds the ID to the request
carsRouter.param('id', function(req, res, next, id) {
    req.body.id = id;
    next();
});
//Routing
carsRouter.route('/cars')
  .get(function(req, res){
    carsController.getCars(req, res);
  })
  .post(function(req, res){
    carsController.createCar(req, res);
  });

carsRouter.route('/cars/:id')
  .get(function(req, res){
    carsController.getCarById(req, res);
  })
  .delete(function(req, res){
    carsController.deleteCar(req, res);
  })
  .put(function(req, res){
    carsController.updateCar(req, res);
  });

module.exports = carsRouter;
