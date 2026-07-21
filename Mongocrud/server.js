import express from "express";
import mongoose from "mongoose";
import User from "./model/userSchema.js";

const app = express();
mongoose.connect("mongodb://127.0.0.1:27017/myDatabase")
  .then(async () => {
    console.log("DB connected");
    await addUser();

    await readUsers();
  })
  .catch(err => console.log(err));
const addUser = async () => {
  try {
    const user = new User({
      name: "Lavanya",
      email: "lavanya001@gmail.com",
      password: "123456"
    });

    await user.save();
    console.log("User inserted ");
  } catch (err) {
    console.log("Insert error:", err.message);
  }
};

const readUsers = async () => {
  try {
    const users = await User.find();
    console.log("All Users ", users);
  } catch (err) {
    console.log("Read error:", err.message);
  }
};

app.listen(3000, () => {
  console.log("Server running");
});