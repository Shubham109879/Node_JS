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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = require("./startup/router");
class Application {
    constructor() {
        // Creating app instance
        this._app = null;
        this._router = null;
        this.start = () => __awaiter(this, void 0, void 0, function* () {
            try {
                this._router.init();
                this.listen();
            }
            catch (error) {
            }
        });
        this.listen = () => __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                try {
                    this._app.listen(process.env.PORT, () => {
                        console.log(`App is listening on port ${process.env.PORT}`);
                    });
                }
                catch (error) {
                    console.log("Error......");
                }
            });
        });
        this._app = (0, express_1.default)();
        this._router = new router_1.Router(this._app);
    }
    static instance() {
        //   if(this._instance===null)
        //   {
        //     this._instance=new this();
        //     return this._instance;
        //   }
        //   else{
        //     return this._instance;
        //   }
        return this._instance || (this._instance = new this());
    }
}
Application._instance = null; // Singleton Classes in js/ts
exports.default = Application;
