"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const mobs = [{ name: "Rasor", id: 1 }];
router.get("/", function (req, res) {
    res.json(mobs);
});
exports.default = router;
