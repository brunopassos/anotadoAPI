import express from "express";
import noteRoutes from "./routes/Note/note.routes";

const app = express()

app.use(express.json())

app.use(noteRoutes);

const port = 3000;

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})