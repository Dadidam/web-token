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

var decodeJwt = nJwt.verify("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImp0aSI6ImRlOTM2MmQ4LWRmMjYtNDZjMy04MTFjLWIxNzAxOTQwMzRlYiIsImlhdCI6MTUwOTM3NDc1NywiZXhwIjoxNTA5MzgwMzY1fQ.jmksn5qgBPWw-haztEkZwXKqKi6DVHdilUKEHCvr4Tw","secret", 'HS256');

console.log("decodeJwt:", decodeJwt);