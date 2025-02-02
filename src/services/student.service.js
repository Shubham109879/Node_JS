 import { createJwtToken } from "../common/Authorization.js";

export const getStudent = async (req) => {
    // return "student.service got a get request and Token Verified Successfully";

    var payload=req.payload;
    console.log(payload);

    return {
         Message: "student.service getStudents method",
        //  Payload: payload,
    };
}

export const createStudent = async (req) => {
    return "student.service got a post request";
}

export const updateStudent = async (req) => {
    return "student.service got a update request";
}

export const deleteStudent = async (req) => {
    return "student.service got a delete request";
}

export const loginStudent= async (req) =>{

    console.log(req.body);

    console.log(req.body.email);
    
    const payload={
        email: req.body.email
    };

    if(req.body.email === "demo@gmail.com" && req.body.pass === "123456")
    {
       var token=createJwtToken(payload);

       console.log(token);
       return{
        Message: "Login Successful",
        Token: token
       }; 
    }

    else{
        return "Invalid username or password";
    }
}