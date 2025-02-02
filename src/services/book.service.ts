import express from "express";

import { Book } from "../database/book.model";
import { where } from "sequelize";
import { options } from "joi";

export class BookService{

      createBook = async (req:express.Request):Promise<any> => {

        const book=await Book.create({
            title: req.body.title,
            author: req.body.author,
            release_date: req.body.release_date,
            subject: req.body.subject
         });
    
        return book;   
     }

    getBookById = async (id: number):Promise<any> => {

      const book=await Book.findByPk(id);
  
      return book;   
   }

    getBook = async (req:express.Request):Promise<any> => {

      const book=await Book.findAll();
  
      return book;   
   }

   updateBook = async (req:express.Request):Promise<any> => {

      const book=await Book.findByPk(parseInt(req.params.id));

      if(req.body.title!=null)
      {
         // book.title=req.body.title;
         // book.author=req.body.author;
         // book.release_date=req.body.release_date;
         // book.subject=req.body.subject;

         book.set("title",req.body.title);
         book.set("author",req.body.author);
         book.set("release_date",req.body.release_date);
         book.set("subject",req.body.subject);

         await book.save();
      }
  
      return book;   
   }

   deleteBook = async (req:express.Request):Promise<any> => {


        const book=Book.destroy({
         where:{
            id: req.params.id,
         }
        });
      // const book=Book.create({
      //     title: req.body.title,
      //     author: req.body.author,
      //     release_date: req.body.release_date,
      //     subject: req.body.subject
      //  });
  
      return book;   
   }
}