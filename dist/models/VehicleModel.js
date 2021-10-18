"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var VehicleSchema = new mongoose_1.default.Schema({
    Name: {
        type: String,
        required: true
    },
    Year: {
        type: Number,
        required: true
    },
    RegistrationNumber: {
        type: String,
        required: true
    },
    Fuel: {
        type: String,
        required: false
    },
    Address: {
        type: String,
        required: false
    },
    OwnershipStatus: {
        type: Number,
        required: true
    },
    Remarks: {
        type: String,
        required: false
    },
    Reference: {
        type: String,
        required: true
    },
    PicturesDirectory: {
        type: String,
        required: true
    },
    PicturesCount: {
        type: Number,
        required: true
    },
    AuctionName: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    }
});
VehicleSchema.statics.build = function (attr) {
    return new exports.Vehicle(attr);
};
exports.Vehicle = mongoose_1.default.model('vehicle', VehicleSchema);
//# sourceMappingURL=VehicleModel.js.map