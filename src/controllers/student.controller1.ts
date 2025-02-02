import express from "express";
// import { createStudent, deleteStudent, getStudent, updateStudent } from "../services/student.service1.js";

import { StudentService } from "../services/student.service1";

import { ResponseHandler } from "../common/response.handler";
import { ErrorHandler } from "../common/error.handler";
import { ApiError } from "../common/api.error";
import { StudentValidator } from "./student.validator";
import { StudentUpdateModel } from "../domain.types/address/address.domain.type";


export class StudentController
{

  // service=new StudentService();

  service: StudentService=null;

  constructor(){
     this.service=new StudentService();
  }

  getById=async (req:express.Request,res:express.Response) =>{
    //res.send('Got a POST request')
  try 
  {
    let students =await this.service.getStudentById(parseInt(req.params.id));


    if(students===null)
    {
      ErrorHandler.throwNotFoundError("Student Not Found");
    }
    const message="Successfully received student information";

    console.log(message);

    ResponseHandler.success(req,res,message,200,students);

    
    // const students=await this.service.getStudent(req);

    // res.send({
    //     // Message: 'student-controller got a GET request',
    //     Message: students,
    //     Url: req.baseUrl,
    //     Method: req.method
    //   })   

     
    // if(students=== null)
    // {
    //   res.status(404).send({
    //     Status: "failure",
    //     Code: 404,
    //     Message: "No student information found",
    //     Data: null,
    //     Url: req.baseUrl,
    //     Method:req.method
    //   })
    // }

    // res.status(200).send({
    //   Status: "Success",
    //   Code: 200,
    //   Message: "Students information retreived Successfully",
    //   Data: students,
    //   Url: req.baseUrl,
    //   Method:req.method
    // })

    //  ResponseHandler.success(req,res,message,200,record);

  } 
  
  catch (error: any) 
  {
  //   res.send({
  //   Message: "Unable to process get request",
  //   Url: req.baseUrl,
  //   Method: req.method
  // });

  // res.status(500).send({
  //   Status: "failure",
  //   Code: 500,
  //   Message: error.message,
  //   Data: error.stack,
  //   Url: req.baseUrl,
  //   Method:req.method
  // })

  ResponseHandler.handleError(req,res,error);

    
 }
}


  get=async (req:express.Request,res:express.Response) =>{
    //res.send('Got a POST request')
  try 
  {
    let students =await this.service.getStudent(req);


    if(students===null)
    {
      ErrorHandler.throwNotFoundError("Student Not Found");
    }
    const message="Successfully received student information";

    ResponseHandler.success(req,res,message,200,students);

    
    // const students=await this.service.getStudent(req);

    // res.send({
    //     // Message: 'student-controller got a GET request',
    //     Message: students,
    //     Url: req.baseUrl,
    //     Method: req.method
    //   })   

     
    // if(students=== null)
    // {
    //   res.status(404).send({
    //     Status: "failure",
    //     Code: 404,
    //     Message: "No student information found",
    //     Data: null,
    //     Url: req.baseUrl,
    //     Method:req.method
    //   })
    // }

    // res.status(200).send({
    //   Status: "Success",
    //   Code: 200,
    //   Message: "Students information retreived Successfully",
    //   Data: students,
    //   Url: req.baseUrl,
    //   Method:req.method
    // })

    //  ResponseHandler.success(req,res,message,200,record);

  } 
  
  catch (error: any) 
  {
  //   res.send({
  //   Message: "Unable to process get request",
  //   Url: req.baseUrl,
  //   Method: req.method
  // });

  // res.status(500).send({
  //   Status: "failure",
  //   Code: 500,
  //   Message: error.message,
  //   Data: error.stack,
  //   Url: req.baseUrl,
  //   Method:req.method
  // })

  ResponseHandler.handleError(req,res,error);

    
 }
}

create = async (req:express.Request,res:express.Response)=>{
//res.send('Got a POST request')
try {

   await StudentValidator.validateCreateRequest(req.body);

  const student=await this.service.createStudent(req);

  if(student===null)
  {
    throw new ApiError("Unable to create User!",400);
  }

  const message="Student created  successfully";
  ResponseHandler.success(req,res,message,200,student);

  // res.send({
  //   // Message: 'student-controller got a POST request',
  //   Message: response2,
  //   Url: req.baseUrl,
  //   Method: req.method
  // }) 


  // if(student===null)
  // {
  //   res.status(404).send({
  //     Status: "failure",
  //     Code: 404,
  //     Message: "Unable to create User",
  //     Data: null,
  //     Url: req.baseUrl,
  //     Method:req.method
  //   });
  // }

  // res.status(200).send({
  //   Status: "Success",
  //   Code: 200,
  //   Message: "Students created Successfully",
  //   Data: student,
  //   Url: req.baseUrl,
  //   Method:req.method
  // })

  
} catch (error:any) {
  // res.send({
  //   Message: "Unable to process post request",
  //   Url: req.baseUrl,
  //   Method: req.method
  // });

  // res.status(500).send({
  //   Status: "failure",
  //   Code: 500,
  //   Message: error.message,
  //   Data: error.stack,
  //   Url: req.baseUrl,
  //   Method:req.method
  // })

  ResponseHandler.handleError(req,res,error);
  
}

}

update = async (req:express.Request,res:express.Response)=>{
//res.send('Got a POST request')
try 
{

  const isPresent=await this.service.getStudentById(parseInt(req.params.id));

  if(isPresent===null)
  {
    ErrorHandler.throwNotFoundError(`Student with Id ${req.params.id} not found`);
  }


   await StudentValidator.validateUpdateRequest(req.body);

   const updateModel: StudentUpdateModel=this.getUpdateModel(req.body);

  // const student=await this.service.updateStudent(req);

  const student=await this.service.updateStudent(req.params.id,updateModel);

  ResponseHandler.success(req,res,"Successfully updated...",200,student);
  // res.send({
  //   // Message: 'student-controller got a PUT request',
  //   Message: response3,
  //   Url: req.baseUrl,
  //   Method: req.method
  // })    

  // if(student===null)
  //   {
  //     res.status(404).send({
  //       Status: "failure",
  //       Code: 404,
  //       Message: "Unable to update User",
  //       Data: null,
  //       Url: req.baseUrl,
  //       Method:req.method
  //     });
  //   }
  
  //   res.status(200).send({
  //     Status: "Success",
  //     Code: 200,
  //     Message: "Student updated Successfully",
  //     Data: student,
  //     Url: req.baseUrl,
  //     Method:req.method
  //   })
} 

catch (error:any) {
  // res.send({
  //   Message: "Unable to process put request",
  //   Url: req.baseUrl,
  //   Method: req.method
  // });

  // res.status(500).send({
  //   Status: "failure",
  //   Code: 500,
  //   Message: error.message,
  //   Data: error.stack,
  //   Url: req.baseUrl,
  //   Method:req.method
  // });

  ResponseHandler.handleError(req,res,error);
}

}

private getUpdateModel(requestBody): StudentUpdateModel{
  const model: StudentUpdateModel={
     name:requestBody.name,
     age: requestBody.age ? parseInt(requestBody.age) : undefined,
  };
  return model;
}

 del = async (req:express.Request,res:express.Response)=>{
//res.send('Got a POST request')

try 
{
  // res.send({
  //   // Message: 'student-controller got a DELETE request',
  //   Message: response4,
  //   Url: req.baseUrl,
  //   Method: req.method
  // }) 
  
  const id: number=parseInt(req.params.id);

  const isPresent=await this.service.getStudentById(id);

  console.log(isPresent);

  if(isPresent===null)
  {
    ErrorHandler.throwNotFoundError(`Student with Id ${req.params.id} not found`);
  }

  // const stud=await this.service.deleteStudent(req);
  const stud=await this.service.deleteStudent(id);
  const message="Student record deleted successfully";
  ResponseHandler.success(req,res,message,200,stud);


    // if(stud===null)
    // {
    //   res.status(404).send({
    //     Status: "failure",
    //     Code: 404,
    //     Message: "Unable to delete User",
    //     Data: null,
    //     Url: req.baseUrl,
    //     Method:req.method
    //   });
    // }
  
    // res.status(200).send({
    //   Status: "Success",
    //   Code: 200,
    //   Message: "Student deleted Successfully",
    //   Data: stud,
    //   Url: req.baseUrl,
    //   Method:req.method
    // })  
} 

catch (error: any) 
{
  // res.send({
  //   Message: "Unable to process delete request",
  //   Url: req.baseUrl,
  //   Method: req.method
  // });

  // res.status(500).send({
  //   Status: "failure",
  //   Code: 500,
  //   Message: error.message,
  //   Data: error.stack,
  //   Url: req.baseUrl,
  //   Method:req.method
  // })

  ResponseHandler.handleError(req,res,error);
}

}


}
















// export const get=async (req:express.Request,res:express.Response) =>{
//         //res.send('Got a POST request')
//       try 
//       {
//         const response=await getStudent(req);
//         res.send({
//             // Message: 'student-controller got a GET request',
//             Message: response,
//             Url: req.baseUrl,
//             Method: req.method
//           })   
//       } 
      
//       catch (error) 
//       {
//         res.send({
//         Message: "Unable to process get request",
//         Url: req.baseUrl,
//         Method: req.method
//       });
        
//      }
// }

// export const create = async (req:express.Request,res:express.Response)=>{
//     //res.send('Got a POST request')
//     try {
//       const response2=await createStudent(req);
//       res.send({
//         // Message: 'student-controller got a POST request',
//         Message: response2,
//         Url: req.baseUrl,
//         Method: req.method
//       }) 
      
//     } catch (error) {
//       res.send({
//         Message: "Unable to process post request",
//         Url: req.baseUrl,
//         Method: req.method
//       });
      
//     }
   
//  }

//  export const update = async (req:express.Request,res:express.Response)=>{
//     //res.send('Got a POST request')
//     try 
//     {
//       const response3=await updateStudent(req);
//       res.send({
//         // Message: 'student-controller got a PUT request',
//         Message: response3,
//         Url: req.baseUrl,
//         Method: req.method
//       })    
//     } 
    
//     catch (error) {
//       res.send({
//         Message: "Unable to process put request",
//         Url: req.baseUrl,
//         Method: req.method
//       });
//     }
    
//  }

//  export const del = async (req:express.Request,res:express.Response)=>{
//     //res.send('Got a POST request')
//     const response4=await deleteStudent(req);
//     try 
//     {
//       res.send({
//         // Message: 'student-controller got a DELETE request',
//         Message: response4,
//         Url: req.baseUrl,
//         Method: req.method
//       })   
//     } 
    
//     catch (error) 
//     {
//       res.send({
//         Message: "Unable to process delete request",
//         Url: req.baseUrl,
//         Method: req.method
//       });
//     }
    
//  }

//  export const login=async (req,res)=>{
//   try 
//   {

//     let response5=await loginStudent(req);

//     console.log(response5);

//     res.send({
//       Message: response5,
//       Url: req.baseUrl,
//       Method: req.method
//     })
//   } 
  
//   catch (error) 
//   {
//     res.send({
//       Message: "Unable to  login, Please check your Credentials",
//       Url: req.baseUrl,
//       Method: req.method
//     }); 
//   }
//  }