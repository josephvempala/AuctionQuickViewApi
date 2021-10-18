"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var vehicles_1 = __importDefault(require("./routes/vehicles"));
var vehicleImages_1 = __importDefault(require("./routes/vehicleImages"));
var mongoose_1 = __importDefault(require("mongoose"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var app = express_1.default();
app.use('/api/vehicle', vehicles_1.default);
app.use('/api/image', vehicleImages_1.default);
var connectionString = process.env.MONGO_CONNECTION_STRING;
mongoose_1.default.connect(connectionString, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function (err) {
    if (err)
        console.log("Unable to connect to database");
});
app.use(function (err, req, res, next) {
    res.status(500).json();
});
var port = 3000;
app.listen(port, '0.0.0.0', function () {
    console.log("Server started on Port: " + port);
});
//# sourceMappingURL=app.js.map