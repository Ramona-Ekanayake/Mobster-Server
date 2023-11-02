"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const mobs = [{ name: "Rasor", id: Date.now() }];
router.get("/", function (req, res) {
    res.json(mobs);
});
router.post("/", function (req, res) {
    const body = { name: req.body.name, id: Date.now() };
    mobs.push(body);
    res.status(201).json(JSON.stringify(body));
});
exports.default = router;
