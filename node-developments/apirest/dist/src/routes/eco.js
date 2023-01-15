"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const eco_1 = require("../controllers/eco");
const router = express_1.Router();
router.post('/eco', eco_1.eco);
exports.default = router;
//# sourceMappingURL=eco.js.map