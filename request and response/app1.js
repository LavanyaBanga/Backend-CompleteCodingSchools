const http = require("http");

const server = http.createServer((req, res) => {

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");

    res.write("<h1>Welcome to the homepage</h1>");
    res.write('<form action="/submit" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter your username"><br><br>');
    res.write('<label>GENDER</label><br>');
    res.write('<input type="radio" name="gender" value="male"> Male<br>');
    res.write('<input type="radio" name="gender" value="female"> Female<br><br>');
    res.write('<button type="submit">Submit</button>');
    res.write('</form>');

    return res.end();
  }

  else if (req.url === "/submit" && req.method === "POST") {

    res.statusCode = 302;   // important
    res.setHeader("Location", "/about");
    return res.end();
  }

  else if (req.url === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Form submitted successfully</h1>");
  }

  else if (req.url === "/contact") {
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Welcome to the contact page</h1>");
  }

  else {
    res.statusCode = 404;
    res.end("<h1>404 Not Found</h1>");
  }

});

server.listen(4002, () => {
  console.log("Server running on port 4002");
});