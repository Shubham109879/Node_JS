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
exports.Router = void 0;
const student_route_js_1 = require("../routes/student.route.js");
const address_route_js_1 = require("../routes/address.route.js");
const book_route_js_1 = require("../routes/book.route.js");
class Router {
    constructor(app) {
        this.init = () => __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                try {
                    this._app.get("/api/v1", (req, res) => {
                        res.send({ message: 'Demo Api Service' });
                    });
                    (0, student_route_js_1.registerStudent)(this._app);
                    (0, book_route_js_1.registerBook)(this._app);
                    (0, address_route_js_1.registerAddress)(this._app);
                }
                catch (error) {
                    console.log("Error initializing the Routes");
                }
            });
        });
        this._app = app;
    }
}
exports.Router = Router;
