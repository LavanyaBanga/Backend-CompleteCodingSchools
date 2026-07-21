import express from "express";
import mongoose from "mongoose";
const connectDb=async()=>{
      try{
     await mongoose.connect("mongodb://127.0.0.1:27017/Backenddb")
     console.log("Database connected successfully");
      }catch(err){
        console.log("connection failed",err);
      }
}
export default connectDb;
