import express from "express";

import { BookService } from "../services/book.service";

import { ApiError } from "../common/api.error";

import { ResponseHandler } from "../common/response.handler";

import { ErrorHandler } from "../common/error.handler";
import { number } from "joi";


export class BookController{
    
    service: BookService=null;

    constructor(){
        this.service=new BookService();
    }
    
    create = async (req:express.Request,res:express.Response)=>{
    //res.send('Got a POST request')
    try {
    
      const book=await this.service.createBook(req);
    
      if(book===null)
      {
        throw new ApiError("Unable to create Book!",400);
      }
    
      const message="Book created  successfully";
      ResponseHandler.success(req,res,message,200,book);
      
    } 
    
    catch (error:any) {
       ResponseHandler.handleError(req,res,error);
    }
  }

  getById = async (req:express.Request,res:express.Response)=>{
    //res.send('Got a POST request')

    const id: number=parseInt(req.params.id);

    try {
    
      const book=await this.service.getBookById(id);
    
      if(book===null)
      {
        ErrorHandler.throwNotFoundError("Book Not Found");
      }
    
      const message="Successfully received Book information";
      ResponseHandler.success(req,res,message,200,book);
      
    } 
    
    catch (error:any) {
       ResponseHandler.handleError(req,res,error);
    }
  }

    get = async (req:express.Request,res:express.Response)=>{
      //res.send('Got a POST request')
      try {
      
        const book=await this.service.getBook(req);
      
        if(book===null)
        {
          ErrorHandler.throwNotFoundError("Book Not Found");
        }
      
        const message="Successfully received Book information";
        ResponseHandler.success(req,res,message,200,book);
        
      } 
      
      catch (error:any) {
         ResponseHandler.handleError(req,res,error);
      }
    }

    update = async (req:express.Request,res:express.Response)=>{
      //res.send('Got a POST request')
      try {

        const isPresent=await this.service.getBookById(parseInt(req.params.id));

        if(isPresent===null)
        {
          ErrorHandler.throwNotFoundError(`Book with Id ${req.params.id} not found`);
        }
      
        const book=await this.service.updateBook(req);
      
      
        const message="Book updated successfully";
        ResponseHandler.success(req,res,message,200,book);
        
      } 
      
      catch (error:any) {
         ResponseHandler.handleError(req,res,error);
      }
    }

    delete = async (req:express.Request,res:express.Response)=>{
      //res.send('Got a POST request')
      try {

        const id: number=parseInt(req.params.id);

        const isPresent=await this.service.getBookById(id);

        if(isPresent===null)
        {
         ErrorHandler.throwNotFoundError(`Book with Id ${req.params.id} not found`);
        }

      
        const student=await this.service.deleteBook(req);
      
        const message="Book record deleted successfully";
        ResponseHandler.success(req,res,message,200,student);
        
      } 
      
      catch (error:any) {
         ResponseHandler.handleError(req,res,error);
      }
    }
 }
