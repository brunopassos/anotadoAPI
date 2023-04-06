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
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../../data-source");
const note_entity_1 = require("../../entities/note.entity");
const appError_1 = require("../../errors/appError");
const deleteNoteService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const noteRepository = data_source_1.AppDataSource.getRepository(note_entity_1.Note);
    const note = yield noteRepository.findOne({ where: { id: id } });
    if (!note) {
        throw new appError_1.AppError(404, "Note not found");
    }
    yield noteRepository.delete(note.id);
    return true;
});
exports.default = deleteNoteService;
