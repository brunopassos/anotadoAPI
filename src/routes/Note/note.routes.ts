import { Router } from "express";

const noteRoutes = Router();

import createNoteController from "../../controllers/Note/createNote.controller";


noteRoutes.post("/note", createNoteController);

export default noteRoutes;