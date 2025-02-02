"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerBook = void 0;
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const book_controller_1 = require("../controllers/book.controller");
// Routing Purpose
const registerBook = (app) => {
    const bookRouter = express_1.default.Router();
    const controller = new book_controller_1.BookController();
    bookRouter.get('/all', controller.get);
    bookRouter.get('/:id', controller.getById);
    bookRouter.post('/', controller.create);
    bookRouter.put('/:id', controller.update);
    bookRouter.delete('/:id', controller.delete);
    app.use(express_1.default.json());
    app.use('/api/v1/book', bookRouter);
};
exports.registerBook = registerBook;
