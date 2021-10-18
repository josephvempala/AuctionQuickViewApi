"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = require("body-parser");
var express_1 = require("express");
var vehicleImages_1 = require("../controllers/vehicleImages");
var router = express_1.Router();
router.use(body_parser_1.json());
router.get('/:vehicleId/:imageId', vehicleImages_1.getPictureById);
exports.default = router;
//# sourceMappingURL=vehicleImages.js.map