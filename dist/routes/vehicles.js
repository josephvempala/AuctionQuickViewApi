"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = require("body-parser");
var express_1 = require("express");
var vehicles_1 = require("../controllers/vehicles");
var router = express_1.Router();
router.use(body_parser_1.json());
router.get('/', vehicles_1.getVehiclesHandler);
router.get('/:id', vehicles_1.getVehicleById);
exports.default = router;
//# sourceMappingURL=vehicles.js.map