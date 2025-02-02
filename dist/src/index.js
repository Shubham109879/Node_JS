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
const dotenv_1 = __importDefault(require("dotenv"));
// import express from "express";
// import { studentRoute } from "./routes/student.route.js";
const ap_1 = __importDefault(require("./ap"));
dotenv_1.default.config();
// app.use('/student',studentRoute);
// Anonymous Function - Function without name
(() => __awaiter(void 0, void 0, void 0, function* () {
    const app = ap_1.default.instance();
    app.start();
}))();
// app.listen(process.env.PORT,()=>{
//     console.log(`App is listening on port ${process.env.PORT}`);
// })
/* steps -
1. created app instance of express
2. created router, mounted - http methods and route handler - Route files
3. written the controller - Route Handler
4. written the services.
*/
