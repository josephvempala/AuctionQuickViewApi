import { RequestHandler } from "express";
import mongoose from "mongoose";
import { Vehicle, IVehicle } from "../models/VehicleModel";
import fs from 'fs';
import path from 'path';

export const getPictureById : RequestHandler<{vehicleId:mongoose.ObjectId, imageId:number}> = async (req, res, next) => {
  if(!(req.params.vehicleId && req.params.imageId)){
    res.status(400).send();
  }
  const vehicleId = req.params.vehicleId;
  const imageId = +req.params.imageId;
  try{
    const vehicle = await Vehicle.findById(vehicleId);
    if(!vehicle){
        res.status(404).send();
    }
    const pictures = fs.readdirSync(vehicle?.PicturesDirectory as string);
    if(pictures[imageId]){
      let imagePath = path.join(vehicle?.PicturesDirectory as string, pictures[imageId]);
      res.sendFile(imagePath);
    }
    else{
      res.status(404).send();
    }
  }
  catch(err){
    next(err);
  }
};