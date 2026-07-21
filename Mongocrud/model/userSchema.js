import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,//isse we ensure ki name field hmesha provide hoga
    maxLength:[12,"Name should be at most 12 char"]
  },
  email:{
    type:String,
    required:true,
    unique:true//we ensure ki email field me duplicate value na ho
  },
  password:{
    type:String,
    required:true,
    minLength:[6,"Password should be at least 6 char"]
  },
  role:{
    type:String,
    enum:["user","admin"],//we ensure ki role field me "user" ya "admin" hi ho ,enamuration
    default:"user"
  }
})
const users=mongoose.model("user",userSchema);
export default users;

