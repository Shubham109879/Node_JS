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
exports.BookService = void 0;
const book_model_1 = require("../database/book.model");
class BookService {
    constructor() {
        this.createBook = (req) => __awaiter(this, void 0, void 0, function* () {
            const book = yield book_model_1.Book.create({
                title: req.body.title,
                author: req.body.author,
                release_date: req.body.release_date,
                subject: req.body.subject
            });
            return book;
        });
        this.getBookById = (id) => __awaiter(this, void 0, void 0, function* () {
            const book = yield book_model_1.Book.findByPk(id);
            return book;
        });
        this.getBook = (req) => __awaiter(this, void 0, void 0, function* () {
            const book = yield book_model_1.Book.findAll();
            return book;
        });
        this.updateBook = (req) => __awaiter(this, void 0, void 0, function* () {
            const book = yield book_model_1.Book.findByPk(parseInt(req.params.id));
            if (req.body.title != null) {
                // book.title=req.body.title;
                // book.author=req.body.author;
                // book.release_date=req.body.release_date;
                // book.subject=req.body.subject;
                book.set("title", req.body.title);
                book.set("author", req.body.author);
                book.set("release_date", req.body.release_date);
                book.set("subject", req.body.subject);
                yield book.save();
            }
            return book;
        });
        this.deleteBook = (req) => __awaiter(this, void 0, void 0, function* () {
            const book = book_model_1.Book.destroy({
                where: {
                    id: req.params.id,
                }
            });
            // const book=Book.create({
            //     title: req.body.title,
            //     author: req.body.author,
            //     release_date: req.body.release_date,
            //     subject: req.body.subject
            //  });
            return book;
        });
    }
}
exports.BookService = BookService;
