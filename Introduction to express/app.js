const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  console.log("URL:", req.url);
  console.log("Method:", req.method);
  next();
});
app.get("/", (req, res) => {
  res.send(`
    <h1>Welcome to the Home Page</h1>
    <form action="/submit" method="POST">
    <input type="text" name="username" placeholder="Enter your name"/><br><br>
    <button type="submit">Submit</button>
    </form>
  `);
});
app.post("/submit", (req, res) => {
  console.log("Form Data:", req.body);

  res.send(`
    <h2>Form Submitted Successfully</h2>
    <p>Your Name: ${req.body.username}</p>
    <a href="/">Go Back Home</a>
  `);
});
app.get("/about", (req, res) => {
  res.send("<h1>Welcome to the About Page</h1>");
});
app.get("/contact", (req, res) => {
  res.send("<h1>Welcome to the Contact Page</h1>");
});
app.use((req, res) => {//sare routes ke baad likhna hai taaki agar koi route match nahi hua toh ye 404 page not found show kare
  res.status(404).send("<h1>404 Page Not Found</h1>");
});
app.listen(4000, () => {
  console.log("Server is running on port 4000");
});