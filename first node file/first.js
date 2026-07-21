console.log("Hello, World! This is the backend.");
const fs=require('fs');
fs.writeFile('output.txt',"This is my file name",(err)=>{
  if(err){
    console.log(err);
  }
  else{
    console.log("no error found and file is created");
  }
})