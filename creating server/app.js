const http=require('http');
//function requestListener(req,res){
 // console.log(req);
//}-pld way of writing the function
const server=http.createServer((req,res)=>{
  //console.log(req);
  //Middleware is a function that has access to req, res, and next.
 
});
//server.listen(4000);//listening to port 4000,port dete h jispe server run hoga ,agr port 4000 pe koi aur server run hoga to error aayega,so we can change the port number to avoid the error
server.listen(4000,()=>{
  console.log("server is running on port 4000");
})