import express from "express";
import { get } from "../controllers/student.controller.js";
// import { create } from "../controllers/student.controller.js";
import { update } from "../controllers/student.controller.js";
import { del } from "../controllers/student.controller.js";

import { login } from "../controllers/student.controller.js";

import { authorization } from "../common/Authorization.js";



//const express=require('express');

const app=express();

const port=3000;

app.use(express.json());

export const studentRouter=express.Router();

app.use('/student',studentRouter);

// studentRouter.get('/',(req,res)=>{
// //    res.send('Hello World!')
//       res.send({
//         Message: 'got at GET request',
//         Url: req.baseUrl,
//         Method: req.method
//       }) 
// });

// studentRouter.get('/',get);

studentRouter.get('/',authorization,get);

// studentRouter.post('/',create);

studentRouter.post('/login',login);

 studentRouter.put('/',update);

 studentRouter.delete('/',del);

 app.listen(port,()=>{
    console.log(`Example listening on Port Number ${port}`);
 })

