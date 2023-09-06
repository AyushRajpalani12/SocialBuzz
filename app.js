const http = require('http');
const server =  http.createServer((req , res)=>
{
console.log("Server Created ");
res.end("working")
});


server.listen(5000 , "LocalHost" , () => {
         console.log("Server is running on 5000")
})
