import express from "express";
import { registerStudent } from "../routes/student.route.js";
import { registerAddress } from "../routes/address.route.js";
import { registerBook } from "../routes/book.route.js";

export class Router{

   private _app:express.Application;

   constructor(app:express.Application)
   {
    this._app=app;
   }

   public init=async ():Promise<Boolean>=>{
      return new Promise((resolve,reject)=>{
         try 
         {
           this._app.get("/api/v1",(req,res)=>{
              res.send({message: 'Demo Api Service'});
           })
           
           registerStudent(this._app);
           registerBook(this._app);
           registerAddress(this._app);
         } 
         
         catch (error) 
         {
           console.log("Error initializing the Routes");  
         }
      })
   }



}