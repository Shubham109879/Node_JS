import jwt from 'jsonwebtoken';

export function createJwtToken(student)
{
    return jwt.sign(student,"MySecretKey",{expiresIn: 3000});
    // return jwt.sign(student,"MySecretKey");
}

export async function authorization(req,res,next) {

    const authHeader=req.headers.authorization;
    console.log(authHeader);

    if(authHeader!==undefined)
    {
      const bearerToken=authHeader.split(" ");
      const token=bearerToken[1];

      try 
      {
        const payload=await verifyJwtToken(token);
        console.log(payload);
        req.payload=payload;
        next();
      } 

      catch (error) 
      {
        res.send({
                Message: error,
            });
      }
    }

    else
    {
        res.send({
            Message: "Unauthorized Access",
        }); 
    }
}

export function verifyJwtToken(student)
{
    return jwt.verify(student,"MySecretKey");
}