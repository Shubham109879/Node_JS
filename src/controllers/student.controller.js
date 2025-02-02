
import { createStudent, deleteStudent, getStudent, updateStudent, loginStudent } from "../services/student.service.js";

export const get=async (req,res) =>{
        //res.send('Got a POST request')
      try 
      {
        const response=await getStudent(req);
        res.send({
            // Message: 'student-controller got a GET request',
            Message: response,
            Url: req.baseUrl,
            Method: req.method
          })   
      } 
      
      catch (error) 
      {
        res.send({
        Message: "Unable to process get request",
        Url: req.baseUrl,
        Method: req.method
      });
        
     }
}

export const create = async (req,res)=>{
    //res.send('Got a POST request')
    try {
      const response2=await createStudent(req);
      res.send({
        // Message: 'student-controller got a POST request',
        Message: response2,
        Url: req.baseUrl,
        Method: req.method
      }) 
      
    } catch (error) {
      res.send({
        Message: "Unable to process post request",
        Url: req.baseUrl,
        Method: req.method
      });
      
    }
   
 }

 export const update = async (req,res)=>{
    //res.send('Got a POST request')
    try 
    {
      const response3=await updateStudent(req);
      res.send({
        // Message: 'student-controller got a PUT request',
        Message: response3,
        Url: req.baseUrl,
        Method: req.method
      })    
    } 
    
    catch (error) {
      res.send({
        Message: "Unable to process put request",
        Url: req.baseUrl,
        Method: req.method
      });
    }
    
 }

 export const del = async (req,res)=>{
    //res.send('Got a POST request')
    const response4=await deleteStudent(req);
    try 
    {
      res.send({
        // Message: 'student-controller got a DELETE request',
        Message: response4,
        Url: req.baseUrl,
        Method: req.method
      })   
    } 
    
    catch (error) 
    {
      res.send({
        Message: "Unable to process delete request",
        Url: req.baseUrl,
        Method: req.method
      });
    }
    
 }

 export const login=async (req,res)=>{
  try 
  {

    let response5=await loginStudent(req);

    console.log(response5);

    res.send({
      Message: response5,
      Url: req.baseUrl,
      Method: req.method
    })
  } 
  
  catch (error) 
  {
    res.send({
      Message: "Unable to  login, Please check your Credentials",
      Url: req.baseUrl,
      Method: req.method
    }); 
  }
 }