"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const appError_1 = require("./errors/appError");
const note_routes_1 = __importDefault(require("./routes/Note/note.routes"));
const user_routes_1 = __importDefault(require("./routes/User/user.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(note_routes_1.default);
app.use(user_routes_1.default);
app.use((err, request, response, _) => {
    if (err instanceof appError_1.AppError) {
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
    console.log(`App rodando na porta ${port}`);
});
