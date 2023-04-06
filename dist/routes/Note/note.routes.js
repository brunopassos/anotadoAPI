"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const noteRoutes = (0, express_1.Router)();
const createNote_controller_1 = __importDefault(require("../../controllers/Note/createNote.controller"));
const deleteNote_controller_1 = __importDefault(require("../../controllers/Note/deleteNote.controller"));
const listNotes_controller_1 = __importDefault(require("../../controllers/Note/listNotes.controller"));
const updateNote_controller_1 = __importDefault(require("../../controllers/Note/updateNote.controller"));
const authUser_middleware_1 = __importDefault(require("../../middlewares/authUser.middleware"));
noteRoutes.post("/note", authUser_middleware_1.default, createNote_controller_1.default);
noteRoutes.get("/note", listNotes_controller_1.default);
noteRoutes.patch("/note/:id", updateNote_controller_1.default);
noteRoutes.delete("/note/:id", deleteNote_controller_1.default);
exports.default = noteRoutes;
