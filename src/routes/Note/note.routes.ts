import { Router } from "express";

const noteRoutes = Router();

import createNoteController from "../../controllers/Note/createNote.controller";
import listNotesController from "../../controllers/Note/listNotes.controller";


noteRoutes.post("/note", createNoteController);
noteRoutes.get("/note", listNotesController);

export default noteRoutes;