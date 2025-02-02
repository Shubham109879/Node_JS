import jwt from 'jsonwebtoken';

// var token=jwt.sign({foo: 'bar'},'shhhhh');

// console.log(token);

// const tokenArr=token.split('.');

// console.log(tokenArr);

// Create Token

var token=jwt.sign({Name : 'Node.js'},'PrivateKey',{expiresIn:60});
console.log(token);

// Verify Token

try 
{
    // var decoded=jwt.verify(token,'PrivateKey');
    var decoded=jwt.verify(eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOYW1lIjoiTm9kZS5qcyIsImlhdCI6MTczNTIwNzAyMywiZXhwIjoxNzM1MjA3MDgzfQ.ycQr7J_VRmfh9-d-F8FQqNqX4_FR95TCVgP0oSaQGRY,'PrivateKey');
    console.log('Valid Token');  
} 
catch (error) 
{
 console.log('Invalid Token')    
}



