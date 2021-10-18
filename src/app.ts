import express, { NextFunction, Request, Response } from 'express';
import vehicles from './routes/vehicles';
import images from './routes/vehicleImages';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { json } from 'body-parser';

dotenv.config();
const app = express();

app.use('/api/vehicle', vehicles);
app.use('/api/image', images);

const connectionString = process.env.MONGO_CONNECTION_STRING!;
mongoose.connect( connectionString ,{
    useCreateIndex : true,
    useNewUrlParser : true,
    useUnifiedTopology :true
}, (err) => {
    if(err)
        console.log("Unable to connect to database");
});
app.use((err : Error, req : Request , res: Response, next: NextFunction) => {
    res.status(500).json();
});
const port = 3000;

app.listen(port,'0.0.0.0', () => {
    console.log(`Server started on Port: ${port}`);
});