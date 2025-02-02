// import { createJwtToken } from "../common/Authorization.js";

import express from "express";
// import { ErrorHandler } from "../common/error.handler";
import { PrismaClient } from "@prisma/client";
import { StudentMapper } from "../mapper/student.mapper";
// import { PrismaClientInit } from "../startup/prisma.client.init";

export class StudentService
{

  prisma: PrismaClient=null;
  
  constructor(){
    this.prisma=new PrismaClient();
    // this.prisma=PrismaClientInit.instance().getPrismaInstance();
  }
    getStudentById=async (id: number)=>{
      // let student={
      //   Name:"Sam",
      //   Age: 35,
      // };

      const student=await this.prisma.student.findUnique({
        where:{
           id:id,
        },
      })

      return StudentMapper.toDto(student);
        
    }


    getStudent = async (req:express.Request):Promise<any> => {
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

        const students=await this.prisma.student.findMany({
           include:{
             address:true,
           }
        });

        // if(students === null)
        // {
        //     ErrorHandler.throwNotFoundError("Student Not Found");
        // }

        // throw new Error("Unable to process");

        // return null;

        return StudentMapper.toArrayDto(students);

        // throw new Error("Internal Server Error");
  
    }
    
    createStudent = async (req:express.Request):Promise<any> => {

     /*
     Success - created entry on db
     2. Unable to Create
     3. Run Time Exception
     */

      const student=await this.prisma.student.create({
        data:{
          name:req.body.name,
          age: parseInt(req.body.age),
          // address: {
          //   create:{
          //     city:"Pune",
          //   }
          // }
        },
      })



        // return "student.service got a post request";
        // return student;

        return StudentMapper.toDto(student);
    }
    
    updateStudent = async (id, requestBody) => {
        // return "student.service got a update request";

          const student1=await this.prisma.student.update({
              data:{
                 name: requestBody.name,
                 age:requestBody.age,
              },

              where:{
                 id:parseInt(id),
              },
          })

          return StudentMapper.toDto(student1);
    }
    
    // deleteStudent = async (req:express.Request) => {
    //     return "student.service got a delete request";
    // }

     deleteStudent = async (id: number) => {
        
      const student2=await this.prisma.student.delete({
        where:{
          id:id,
        },
      })

      return StudentMapper.toDto(student2);
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