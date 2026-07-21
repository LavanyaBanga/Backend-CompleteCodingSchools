import bcrypt from "bcrypt";
const salt=bcrypt.genSaltSync(10);
const hash=bcrypt.hashSync("123456",salt);
console.log("PASSWORD:", hash);
const valid=bcrypt.compareSync("123456", hash);
console.log("VALID:", valid);