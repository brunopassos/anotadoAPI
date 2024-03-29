import express, { NextFunction, Request, Response } from "express";
import { AppError } from "./errors/appError";

import noteRoutes from "./routes/Note/note.routes";
import userRoutes from "./routes/User/user.routes";

const app = express()

app.use(express.json())

app.use(noteRoutes);
app.use(userRoutes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: "error",
        message: err.message,
      });
    }
  
    return response.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  });

const port = 3000;

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})