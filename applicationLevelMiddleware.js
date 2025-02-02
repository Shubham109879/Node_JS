import express from 'express';
import 'dotenv/config'

const app=express();

app.use((req,res,next)=>{
   console.log(`Time: ${Date.now()}`);
   next();
})

app.use('/user/:id',(req,res,next)=>{
    console.log(`Request Type: ${req.method}`);
    next();
})

// app.use('/user/:id',(req,res,next)=>{
//     console.log(`Request URL: ${req.originalUrl}`);
//     next();
// },(req,res,next)=>{
//     console.log(`Request Type: ${req.method}`);
//     next();
// })

// app.use('/user/:id',(req,res,next)=>{
//     console.log(`ID: ${req.params.id}`);
//     next();
// },(req,res,next)=>{
//     res.send(`User Info`);
// })

// app.get('/user/:id', (req, res, next) => {
//     res.send('USER')
//   })

// app.get('/user/:id', (req, res, next) => {
//     res.send(req.params.id)
// })

app.get('/user/:id',(req,res,next)=>{
    if (req.params.id === '0') next('route')
     
    else next()
    
    
},(req,res,next)=>{
    res.send('regular')
})

app.get('/user/:id', (req, res, next) => {
    res.send('special')
  })


app.listen(process.env.PORT,()=>{
    console.log(`App is listening on Port Number: ${process.env.PORT}`);
})