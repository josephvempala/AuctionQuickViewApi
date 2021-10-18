import { RequestHandler } from "express";
import mongoose from "mongoose";
import { Vehicle, IVehicle } from "../models/VehicleModel"


export const getVehiclesHandler : RequestHandler = async (req, res, next) => {
  if(!(req.query.limit && req.query.page)){
    res.status(400).send();
  }
  const pageNumber = +req.query.page!;
  const itemsPerPage = +req.query.limit!;
  try{
    const vehicles = await Vehicle.find({isActive:true})
      .skip(pageNumber*itemsPerPage)
      .limit(itemsPerPage)
      .select('Name Year RegistrationNumber Fuel');
    if(vehicles) {
      res.status(200).json(vehicles);
    }
    else {
      res.status(404).send();
    }
  }
  catch(err){
    next(err);
  }
};

export const getVehicleById : RequestHandler<{id:mongoose.ObjectId}> = async (req, res, next) => {
  if(!req.params.id){
    res.status(400).send();
  }
  const vehicleId = req.params.id;
  try{
    const vehicle = await Vehicle.findById(vehicleId);
    res.status(200).json(vehicle);
  }
  catch(err){
    next(err);
  }
};