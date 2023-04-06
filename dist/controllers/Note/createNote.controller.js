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
const class_transformer_1 = require("class-transformer");
const appError_1 = require("../../errors/appError");
const createNote_service_1 = __importDefault(require("../../services/Note/createNote.service"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createNoteController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { title, content } = req.body;
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
        let id = "";
        jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            id = decoded.id;
        });
        const note = yield (0, createNote_service_1.default)({ title, content }, id);
        return res.status(201).json((0, class_transformer_1.instanceToPlain)(note));
    }
    catch (error) {
        if (error instanceof appError_1.AppError) {
            (0, appError_1.handleError)(error, res);
        }
    }
});
exports.default = createNoteController;
