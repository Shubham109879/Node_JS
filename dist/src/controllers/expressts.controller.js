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
exports.get = void 0;
const student_service1_js_1 = require("../services/student.service1.js");
const get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //res.send('Got a POST request')
    try {
        const response = yield (0, student_service1_js_1.getStudent)(req);
        res.send({
            // Message: 'student-controller got a GET request',
            Message: response,
            Url: req.baseUrl,
            Method: req.method
        });
    }
    catch (error) {
        res.send({
            Message: "Unable to process get request",
            Url: req.baseUrl,
            Method: req.method
        });
    }
});
exports.get = get;
