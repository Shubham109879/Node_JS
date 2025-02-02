import express from "express";
import { Router } from "./startup/router";
import { resolve } from "path";

export default class Application{

   // Creating app instance

   public _app: express.Application=null;

   private _router: Router=null;

   private static _instance: Application = null; // Singleton Classes in js/ts
   
   constructor(){
    this._app=express();
    this._router=new Router(this._app);
   }

   public static instance():Application{
    //   if(this._instance===null)
    //   {
    //     this._instance=new this();
    //     return this._instance;
    //   }
    //   else{
    //     return this._instance;
    //   }


     return this._instance || (this._instance=new this());
   }



   start = async ()=>{
      try 
      {
        this._router.init();
        this.listen();

      } 
      
      catch (error) {
         
      }
   }

   private listen=async ()=>{
      return new Promise((resolve,reject)=>{
         try 
         {
            this._app.listen(process.env.PORT,()=>{
              console.log(`App is listening on port ${process.env.PORT}`);
            })
         } 
         
         catch (error) 
         {
            console.log("Error......");
         }
      })
   }
}