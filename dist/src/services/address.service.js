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
exports.AddressService = void 0;
const prisma_client_init_1 = require("../startup/prisma.client.init");
// import { StudentMapper } from "../mapper/student.mapper";
class AddressService {
    constructor() {
        this.prisma = null;
        this.getAddressById = (id) => __awaiter(this, void 0, void 0, function* () {
            // let student={
            //   Name:"Sam",
            //   Age: 35,
            // };
            const address = yield this.prisma.address.findUnique({
                where: {
                    id: id,
                },
            });
            return address;
        });
        this.getAddress = (req) => __awaiter(this, void 0, void 0, function* () {
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
            const address = yield this.prisma.address.findMany({});
            // if(students === null)
            // {
            //     ErrorHandler.throwNotFoundError("Student Not Found");
            // }
            // throw new Error("Unable to process");
            // return null;
            return address;
            // throw new Error("Internal Server Error");
        });
        this.createAddress = (req) => __awaiter(this, void 0, void 0, function* () {
            /*
            Success - created entry on db
            2. Unable to Create
            3. Run Time Exception
            */
            const address = yield this.prisma.address.create({
                data: {
                    city: req.body.city,
                    studentId: parseInt(req.body.studentId),
                },
            });
            // return "student.service got a post request";
            return address;
            // return StudentMapper.toDto(student);
        });
        this.updateAddress = (req) => __awaiter(this, void 0, void 0, function* () {
            // return "student.service got a update request";
            const address = this.prisma.address.update({
                data: {
                    city: req.body.city,
                },
                where: {
                    id: parseInt(req.params.id),
                },
            });
            return address;
        });
        // deleteStudent = async (req:express.Request) => {
        //     return "student.service got a delete request";
        // }
        this.deleteAddress = (id) => __awaiter(this, void 0, void 0, function* () {
            const address = yield this.prisma.address.delete({
                where: {
                    id: id,
                },
            });
            return address;
        });
        // this.prisma=new PrismaClient();
        this.prisma = prisma_client_init_1.PrismaClientInit.instance().getPrismaInstance();
    }
}
exports.AddressService = AddressService;
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
