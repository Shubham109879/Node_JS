import express from "express";
import "dotenv/config";

import { BookController } from "../controllers/book.controller";


// Routing Purpose

 export const registerBook=(app:express.Application)=>{

   const bookRouter=express.Router();

   const controller=new BookController();

   bookRouter.get('/all',controller.get);

   bookRouter.get('/:id',controller.getById);

   bookRouter.post('/',controller.create);

   bookRouter.put('/:id',controller.update);

   bookRouter.delete('/:id',controller.delete);

   app.use(express.json());

   app.use('/api/v1/book',bookRouter);

 }
