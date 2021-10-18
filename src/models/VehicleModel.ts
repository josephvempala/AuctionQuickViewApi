import mongoose from 'mongoose';

export interface IVehicle {
    Name:String,
    Year:Number,
    RegistrationNumber:String,
    Fuel:String,
    Address:String,
    OwnershipStatus:Number,
    Remarks:String,
    Reference:String,
    PicturesDirectory:String,
    PicturesCount:String,
    AuctionName:String,
    isActive:boolean
}
interface VehicleModelInterface extends mongoose.Model<VehicleDocument> {
    build(attr:IVehicle) : VehicleDocument
}

type VehicleDocument = mongoose.Document & IVehicle;

let VehicleSchema = new mongoose.Schema({
    Name:{
        type: String,
        required : true
    },
    Year:{
        type: Number,
        required : true
    },
    RegistrationNumber:{
        type: String,
        required : true
    },
    Fuel:{
        type: String,
        required: false
    },
    Address:{
        type: String,
        required: false
    },
    OwnershipStatus:{
        type: Number,
        required : true
    },
    Remarks:{
        type: String,
        required: false
    },
    Reference:{
        type: String,
        required: true
    },
    PicturesDirectory:{
        type: String,
        required: true
    },
    PicturesCount:{
        type: Number,
        required : true
    },
    AuctionName:{
        type: String,
        required: true
    },
    isActive:{
        type: Boolean,
        required: true
    }
});

VehicleSchema.statics.build = (attr: IVehicle) => {
    return new Vehicle(attr);
}

export const Vehicle = mongoose.model<VehicleDocument, VehicleModelInterface>('vehicle', VehicleSchema);