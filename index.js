import express from "express";

import { studentRouter } from "./src/routes/studentroute.js";

// const express=require('express');


// const app=express();
// const port=3000;

// app.get('/',(req,res)=>{
//     res.send('Hello World!');
// });

// app.post('/',(req,res)=>{
//     res.send('Got a POST request');
// });

// app.put('/user',(req,res)=>{
//     res.send('Got a PUT request at /user');
// });

// app.delete('/user',(req,res)=>{
//     res.send('Got a DELETE request at /user');
// });

// app.route('/student')
// .get((req,res)=>{
//     res.send('Get a Random Book')
// })
// .post((req,res)=>{
//   res.send('Add a Book')
// })
// .put((req,res)=>{
//   res.send('Update the book')
// })
// .delete((req,res)=>{
//     res.send('Delete the book')
// })

// app.use('/student',studentRouter);

// studentRouter.get('/',(req,res)=>{
//     //    res.send('Hello World!')
//           res.send({
//             Message: 'got at GET request',
//             Url: req.baseUrl,
//             Method: req.method
//           }) 
//     });
    
//   studentRouter.post('/',(req,res)=>{
//         //res.send('Got a POST request')
//         res.send({
//             Message: 'got at POST request',
//             Url: req.baseUrl,
//             Method: req.method
//           }) 
//      });
    
//   studentRouter.put('/',(req,res)=>{
//         // res.send('Got a PUT request')
//         res.send({
//             Message: 'got at PUT request',
//             Url: req.baseUrl,
//             Method: req.method
//           }) 
//      });
    
//      studentRouter.delete('/',(req,res)=>{
//         // res.send('Got a DELETE request')
//         res.send({
//             Message: 'got at DELETE request',
//             Url: req.baseUrl,
//             Method: req.method
//           }) 
//      });
    



// app.listen(port,()=>{
//     console.log(`Example listening on Port Number ${port}`);
// });

