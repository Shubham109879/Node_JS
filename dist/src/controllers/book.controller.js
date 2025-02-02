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
exports.BookController = void 0;
const book_service_1 = require("../services/book.service");
const api_error_1 = require("../common/api.error");
const response_handler_1 = require("../common/response.handler");
const error_handler_1 = require("../common/error.handler");
class BookController {
    constructor() {
        this.service = null;
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            //res.send('Got a POST request')
            try {
                const book = yield this.service.createBook(req);
                if (book === null) {
                    throw new api_error_1.ApiError("Unable to create Book!", 400);
                }
                const message = "Book created  successfully";
                response_handler_1.ResponseHandler.success(req, res, message, 200, book);
            }
            catch (error) {
                response_handler_1.ResponseHandler.handleError(req, res, error);
            }
        });
        this.getById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            //res.send('Got a POST request')
            const id = parseInt(req.params.id);
            try {
                const book = yield this.service.getBookById(id);
                if (book === null) {
                    error_handler_1.ErrorHandler.throwNotFoundError("Book Not Found");
                }
                const message = "Successfully received Book information";
                response_handler_1.ResponseHandler.success(req, res, message, 200, book);
            }
            catch (error) {
                response_handler_1.ResponseHandler.handleError(req, res, error);
            }
        });
        this.get = (req, res) => __awaiter(this, void 0, void 0, function* () {
            //res.send('Got a POST request')
            try {
                const book = yield this.service.getBook(req);
                if (book === null) {
                    error_handler_1.ErrorHandler.throwNotFoundError("Book Not Found");
                }
                const message = "Successfully received Book information";
                response_handler_1.ResponseHandler.success(req, res, message, 200, book);
            }
            catch (error) {
                response_handler_1.ResponseHandler.handleError(req, res, error);
            }
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            //res.send('Got a POST request')
            try {
                const isPresent = yield this.service.getBookById(parseInt(req.params.id));
                if (isPresent === null) {
                    error_handler_1.ErrorHandler.throwNotFoundError(`Book with Id ${req.params.id} not found`);
                }
                const book = yield this.service.updateBook(req);
                const message = "Book updated successfully";
                response_handler_1.ResponseHandler.success(req, res, message, 200, book);
            }
            catch (error) {
                response_handler_1.ResponseHandler.handleError(req, res, error);
            }
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            //res.send('Got a POST request')
            try {
                const id = parseInt(req.params.id);
                const isPresent = yield this.service.getBookById(id);
                if (isPresent === null) {
                    error_handler_1.ErrorHandler.throwNotFoundError(`Book with Id ${req.params.id} not found`);
                }
                const student = yield this.service.deleteBook(req);
                const message = "Book record deleted successfully";
                response_handler_1.ResponseHandler.success(req, res, message, 200, student);
            }
            catch (error) {
                response_handler_1.ResponseHandler.handleError(req, res, error);
            }
        });
        this.service = new book_service_1.BookService();
    }
}
exports.BookController = BookController;
