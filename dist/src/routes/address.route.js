"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerAddress = void 0;
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const address_controller_1 = require("../controllers/address.controller");
// import { get } from "../controllers/student.controller1.js";
// import { create } from "../controllers/student.controller.js";
// import { update } from "../controllers/student.controller1.js";
// import { del } from "../controllers/student.controller1.js";
// import { login } from "../controllers/student.controller1.js";
// import { authorization } from "../common/Authorization.js";
//const express=require('express');
// Other Version
// const app=express();
// const port=3000;
// Other Version End
// app.use(express.json());
// Other Version
// export const studentRouter=express.Router();
// app.use('/student',studentRouter);
// Other Version End
// studentRouter.get('/',(req,res)=>{
// //    res.send('Hello World!')
//       res.send({
//         Message: 'got at GET request',
//         Url: req.baseUrl,
//         Method: req.method
//       }) 
// });
// Other Verion
// studentRouter.get('/',get);
// Other Version End
// studentRouter.get('/',authorization,get);
// studentRouter.post('/',create);
// studentRouter.post('/login',login);
// Other Version
//  studentRouter.put('/',update);
//  studentRouter.delete('/',del);
//  app.listen(process.env.PORT,()=>{
//     console.log(`Example listening on Port Number ${process.env.PORT}`);
//  })
// Routing Purpose
const registerAddress = (app) => {
    const studentRouter = express_1.default.Router();
    const controller = new address_controller_1.AddressController();
    studentRouter.get('/all', controller.get);
    studentRouter.get('/:id', controller.getById);
    studentRouter.post('/', controller.create);
    studentRouter.put('/:id', controller.update);
    studentRouter.delete('/:id', controller.del);
    app.use(express_1.default.json());
    app.use('/api/v1/address', studentRouter);
};
exports.registerAddress = registerAddress;
