"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const router = express_1.default.Router();
const dataPath = path_1.default.resolve("../data/mobs");
/* GET mobs listing. */
router.get("/", function (req, res) {
    fs_1.default.readdir(dataPath, (err, files) => {
        try {
            const promises = files.map((file) => {
                return promises_1.default.readFile(dataPath + "/" + file, { encoding: "utf-8" });
            });
            Promise.all(promises).then((files) => {
                res.json(files.map((file) => JSON.parse(file)));
            });
        }
        catch (err) {
            console.log(err);
        }
    });
});
router.get("/a", function (_req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const files = yield promises_1.default.readdir(dataPath);
        console.log("amogus", files);
    });
});
exports.default = router;
