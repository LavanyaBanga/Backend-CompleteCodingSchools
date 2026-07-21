const express = require("express");
const app = express();

const homeRouter = require('./home');   
const userRoutes = require("./user");

app.use((req,res,next)=>{
   console.log(req.url, req.method);
   next();
})

app.use("/", homeRouter);       
app.use("/users", userRoutes);   

app.use((req,res)=>{
   res.status(404).send("404 Not Found");
})

app.listen(4000, () => console.log("Server running on port 4000"));