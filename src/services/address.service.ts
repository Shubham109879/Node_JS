// import { createJwtToken } from "../common/Authorization.js";

import express from "express";
// import { ErrorHandler } from "../common/error.handler";
import { PrismaClient } from "@prisma/client";
import { PrismaClientInit } from "../startup/prisma.client.init";
// import { StudentMapper } from "../mapper/student.mapper";


export class AddressService
{

  prisma: PrismaClient=null;
  
  constructor(){
    // this.prisma=new PrismaClient();
    this.prisma=PrismaClientInit.instance().getPrismaInstance();
  }
   
   getAddressById=async (id: number)=>{
      // let student={
      //   Name:"Sam",
      //   Age: 35,
      // };

      const address=await this.prisma.address.findUnique({
        where:{
           id:id,
        },
      })

      return address;
        
    }


    getAddress = async (req:express.Request):Promise<any> => {
        // return "student.service got a get request and Token Verified Successfully";

          
        // var payload=req.payload;
        // console.log(payload);
    
        // return {
        //      Message: "student.service getStudents method",
        //     //  Payload: payload,
        // };


        /*
         Success- get all the students info
         - Database is empty
         - Run the exception
        */

        //  const students=[
        //     {
        //         name: "A",
        //         age: 10
        //     },
        //     {
        //         name: "B",
        //         age: 20
        //     }
        //  ];

        //  return students;

        // let students={
        //     Name: "Sam",
        //     Age: 35
        // }

        const address=await this.prisma.address.findMany({});

        // if(students === null)
        // {
        //     ErrorHandler.throwNotFoundError("Student Not Found");
        // }

        // throw new Error("Unable to process");

        // return null;

        return address;

        // throw new Error("Internal Server Error");
  
    }
    
    createAddress = async (req:express.Request):Promise<any> => {

     /*
     Success - created entry on db
     2. Unable to Create
     3. Run Time Exception
     */

      const address=await this.prisma.address.create({
        data:{
          city:req.body.city,
          studentId: parseInt(req.body.studentId),
        },
      })



        // return "student.service got a post request";
        return address;

        // return StudentMapper.toDto(student);
    }
    
    updateAddress = async (req:express.Request) => {
        // return "student.service got a update request";

          const address=this.prisma.address.update({
              data:{
                 city: req.body.city,
              },

              where:{
                 id:parseInt(req.params.id),
              },
          })

          return address;
    }
    
    // deleteStudent = async (req:express.Request) => {
    //     return "student.service got a delete request";
    // }

     deleteAddress = async (id: number) => {
        
      const address=await this.prisma.address.delete({
        where:{
          id:id,
        },
      })

      return address;
    }

}


// export const getStudent = async (req:express.Request) => {
//     return "student.service got a get request and Token Verified Successfully";

//     // var payload=req.payload;
//     // console.log(payload);

//     // return {
//     //      Message: "student.service getStudents method",
//     //     //  Payload: payload,
//     // };
// }

// export const createStudent = async (req:express.Request) => {
//     return "student.service got a post request";
// }

// export const updateStudent = async (req:express.Request) => {
//     return "student.service got a update request";
// }

// export const deleteStudent = async (req:express.Request) => {
//     return "student.service got a delete request";
// }

// export const loginStudent= async (req) =>{

//     console.log(req.body);

//     console.log(req.body.email);
    
//     const payload={
//         email: req.body.email
//     };

//     if(req.body.email === "demo@gmail.com" && req.body.pass === "123456")
//     {
//        var token=createJwtToken(payload);

//        console.log(token);
//        return{
//         Message: "Login Successful",
//         Token: token
//        }; 
//     }

//     else{
//         return "Invalid username or password";
//     }
// }