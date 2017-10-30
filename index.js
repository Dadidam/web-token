var uuid = require('uuid');
var nJwt = require('njwt');

var claims = {
 "sub": "1234567890",
 "name": "John Doe",
 "admin": true,
 "jti": "de9362d8-df26-46c3-811c-b170194034eb",
 "iat": 1509374757,
 "exp": 1509378357
}

var jwt = nJwt.create(claims,"secret","HS256");
var token = jwt.compact();

console.log("jwt:", jwt);
console.log("token:", token);
