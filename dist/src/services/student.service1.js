"use strict";
// import { createJwtToken } from "../common/Authorization.js";
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
exports.StudentService = void 0;
// import { ErrorHandler } from "../common/error.handler";
const client_1 = require("@prisma/client");
const student_mapper_1 = require("../mapper/student.mapper");
// import { PrismaClientInit } from "../startup/prisma.client.init";
class StudentService {
    constructor() {
        this.prisma = null;
        this.getStudentById = (id) => __awaiter(this, void 0, void 0, function* () {
            // let student={
            //   Name:"Sam",
            //   Age: 35,
            // };
            const student = yield this.prisma.student.findUnique({
                where: {
                    id: id,
                },
            });
            return student_mapper_1.StudentMapper.toDto(student);
        });
        this.getStudent = (req) => __awaiter(this, void 0, void 0, function* () {
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
            const students = yield this.prisma.student.findMany({
                include: {
                    address: true,
                }
            });
            // if(students === null)
            // {
            //     ErrorHandler.throwNotFoundError("Student Not Found");
            // }
            // throw new Error("Unable to process");
            // return null;
            return student_mapper_1.StudentMapper.toArrayDto(students);
            // throw new Error("Internal Server Error");
        });
        this.createStudent = (req) => __awaiter(this, void 0, void 0, function* () {
            /*
            Success - created entry on db
            2. Unable to Create
            3. Run Time Exception
            */
            const student = yield this.prisma.student.create({
                data: {
                    name: req.body.name,
                    age: parseInt(req.body.age),
                    // address: {
                    //   create:{
                    //     city:"Pune",
                    //   }
                    // }
                },
            });
            // return "student.service got a post request";
            // return student;
            return student_mapper_1.StudentMapper.toDto(student);
        });
        this.updateStudent = (id, requestBody) => __awaiter(this, void 0, void 0, function* () {
            // return "student.service got a update request";
            const student1 = yield this.prisma.student.update({
                data: {
                    name: requestBody.name,
                    age: requestBody.age,
                },
                where: {
                    id: parseInt(id),
                },
            });
            return student_mapper_1.StudentMapper.toDto(student1);
        });
        // deleteStudent = async (req:express.Request) => {
        //     return "student.service got a delete request";
        // }
        this.deleteStudent = (id) => __awaiter(this, void 0, void 0, function* () {
            const student2 = yield this.prisma.student.delete({
                where: {
                    id: id,
                },
            });
            return student_mapper_1.StudentMapper.toDto(student2);
        });
        this.prisma = new client_1.PrismaClient();
        // this.prisma=PrismaClientInit.instance().getPrismaInstance();
    }
}
exports.StudentService = StudentService;
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
