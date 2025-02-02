import dotenv from "dotenv";
// import express from "express";
// import { studentRoute } from "./routes/student.route.js";
import Application from "./ap";


dotenv.config();

// app.use('/student',studentRoute);


// Anonymous Function - Function without name

(async ()=>{
    const app=Application.instance();

    app.start();
})();





// app.listen(process.env.PORT,()=>{
//     console.log(`App is listening on port ${process.env.PORT}`);
// })


/* steps -
1. created app instance of express
2. created router, mounted - http methods and route handler - Route files
3. written the controller - Route Handler
4. written the services.
*/
