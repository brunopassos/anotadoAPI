import { Router } from "express";

const noteRoutes = Router();

import createNoteController from "../../controllers/Note/createNote.controller";
import deleteNoteController from "../../controllers/Note/deleteNote.controller";
import listNotesController from "../../controllers/Note/listNotes.controller";
import updateNoteController from "../../controllers/Note/updateNote.controller";
import authUser from "../../middlewares/authUser.middleware";


noteRoutes.post("/note", authUser, createNoteController);
noteRoutes.get("/note", listNotesController);
noteRoutes.patch("/note/:id", updateNoteController);
noteRoutes.delete("/note/:id", deleteNoteController);

export default noteRoutes;