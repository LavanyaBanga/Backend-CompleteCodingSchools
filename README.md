# Complete Coding School – Backend Development

This repository contains the complete backend development concepts, class codes, assignments, practice programs, APIs, and projects completed during my **Backend Development Course from Complete Coding School**.

The repository documents my journey of learning backend development from basic server creation to building secure, database-driven, and production-ready REST APIs using **Node.js, Express.js, MongoDB, Mongoose, authentication, middleware, and deployment concepts**.

---

## About the Repository

The purpose of this repository is to organise and maintain all the backend development concepts covered throughout the course.

It includes:

* Backend development fundamentals
* Node.js concepts
* Express.js applications
* REST API development
* MongoDB and Mongoose
* Authentication and authorisation
* Middleware implementation
* CRUD operations
* Error handling
* File handling
* EJS-based applications
* API testing
* Git and GitHub practice
* Backend projects and assignments

---

## Technologies Used

* Node.js
* Express.js
* JavaScript
* MongoDB
* MongoDB Atlas
* Mongoose
* REST APIs
* JSON Web Token
* bcrypt.js
* Passport.js
* Google OAuth
* EJS
* Postman
* Git
* GitHub
* Render
* Visual Studio Code

---

## Topics Covered

### Backend Development Fundamentals

* Introduction to backend development
* Client-server architecture
* Frontend and backend communication
* Request-response cycle
* HTTP and HTTPS
* Web servers
* APIs
* JSON data
* Backend project structure

---

## Node.js

* Introduction to Node.js
* Node.js runtime environment
* Running JavaScript outside the browser
* Node Package Manager
* Installing external packages
* Creating custom modules
* Importing and exporting modules
* CommonJS modules
* ES Modules
* Built-in Node.js modules
* File system module
* Path module
* OS module
* HTTP module
* Events and EventEmitter
* Process object
* Environment variables
* Asynchronous programming

---

## Asynchronous JavaScript

* Callbacks
* Callback functions
* Callback hell
* Promises
* Promise chaining
* `async` and `await`
* Error handling using `try-catch`
* Synchronous and asynchronous operations
* Event loop
* Non-blocking architecture

---

## Express.js

* Introduction to Express.js
* Creating an Express server
* Application setup
* Routes
* Route parameters
* Query parameters
* Request body
* HTTP methods
* Express Router
* Controllers
* Middleware
* Static files
* Template engines
* Error-handling middleware
* Modular project structure

---

## HTTP Methods

The following HTTP methods are used throughout the repository:

| Method   | Purpose               |
| -------- | --------------------- |
| `GET`    | Retrieve data         |
| `POST`   | Create new data       |
| `PUT`    | Replace existing data |
| `PATCH`  | Update specific data  |
| `DELETE` | Delete data           |

---

## REST API Development

* REST architecture
* RESTful API design
* API endpoints
* Request and response handling
* Status codes
* JSON responses
* Route organisation
* Controller-based architecture
* Service-based architecture
* API versioning
* Testing APIs using Postman
* Handling invalid routes
* Sending structured API responses

---

## CRUD Operations

The repository contains multiple applications implementing CRUD operations:

* Create new records
* Read all records
* Read a single record
* Update existing records
* Delete records
* Search and filter records
* Sort records
* Pagination
* Data validation

---

## MongoDB

* Introduction to NoSQL databases
* MongoDB setup
* MongoDB Compass
* MongoDB Atlas
* Databases
* Collections
* Documents
* BSON format
* MongoDB queries
* Insert operations
* Read operations
* Update operations
* Delete operations
* Filtering documents
* Sorting
* Limiting results
* MongoDB operators

---

## MongoDB Operators

Some of the operators practised in this repository include:

* `$gt`
* `$gte`
* `$lt`
* `$lte`
* `$eq`
* `$ne`
* `$in`
* `$nin`
* `$and`
* `$or`
* `$exists`
* `$set`
* `$unset`
* `$push`
* `$pull`
* `$inc`

---

## Mongoose

* Connecting Node.js with MongoDB
* Creating Mongoose schemas
* Creating models
* Schema data types
* Default values
* Required fields
* Unique fields
* Custom validation
* Built-in validation
* Model methods
* Document methods
* Mongoose middleware
* Timestamps
* References
* Population
* Query methods

---

## Authentication

* User registration
* User login
* Password hashing
* Password comparison
* JSON Web Tokens
* Token generation
* Token verification
* Protected routes
* Authentication middleware
* Login sessions
* Cookies
* Logout functionality

---

## Authorisation

* Role-based access control
* User roles
* Admin roles
* Protected resources
* Restricting routes
* Checking permissions
* Authentication versus authorisation
* Admin-only operations

---

## Password Security

Passwords are securely handled using:

* `bcrypt`
* Password hashing
* Salt generation
* Password comparison
* Avoiding plain-text password storage

---

## JSON Web Token

JWT is used for secure user authentication.

The basic authentication flow is:

1. User submits login credentials
2. Server verifies the credentials
3. Server generates a JWT
4. Token is sent to the client
5. Client sends the token with protected requests
6. Authentication middleware verifies the token
7. Access is granted to the protected resource

---

## Middleware

* Application-level middleware
* Router-level middleware
* Built-in middleware
* Third-party middleware
* Custom middleware
* Authentication middleware
* Authorisation middleware
* Validation middleware
* Logging middleware
* Error-handling middleware

Commonly used middleware includes:

```javascript
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
```

---

## Error Handling

* Synchronous error handling
* Asynchronous error handling
* `try-catch` blocks
* Custom error classes
* Global error-handling middleware
* Invalid route handling
* Database error handling
* Validation errors
* Authentication errors
* Structured error responses

Example error response:

```json
{
  "success": false,
  "message": "Resource not found"
}
```

---

## Input Validation

* Required field validation
* Email validation
* Password validation
* Schema validation
* Request body validation
* Handling missing values
* Preventing invalid database entries
* Express Validator
* Custom validation logic

---

## MVC Architecture

Several applications in this repository follow the MVC architecture.

```text
Model
  Handles database schemas and data operations

View
  Handles the user interface and templates

Controller
  Handles application logic and request processing
```

A common backend structure is:

```text
project/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── services/
├── utils/
├── views/
├── public/
├── app.js
├── server.js
├── .env
├── .gitignore
└── package.json
```

---

## EJS and Server-Side Rendering

* Introduction to EJS
* Rendering dynamic pages
* Passing data to views
* EJS variables
* EJS conditionals
* EJS loops
* Partials
* Forms
* Handling form submissions
* Building CRUD applications using EJS
* Static files with Express

---

## Cookies and Sessions

* Introduction to cookies
* Creating cookies
* Reading cookies
* Deleting cookies
* Express sessions
* Session-based authentication
* Session storage
* Secure cookies
* HTTP-only cookies

---

## OAuth Authentication

The repository also includes concepts related to third-party authentication.

* Introduction to OAuth
* Google OAuth
* Passport.js
* Authentication strategies
* OAuth callback routes
* User serialisation
* User deserialisation
* Login using Google
* Session support with Passport.js

---

## File Handling and Uploads

* File system operations
* Reading files
* Writing files
* Updating files
* Deleting files
* File upload concepts
* Handling multipart form data
* Upload middleware
* File validation
* Static file access

---

## API Testing

APIs are tested using **Postman**.

Testing includes:

* Sending GET requests
* Sending POST requests
* Sending PUT and PATCH requests
* Sending DELETE requests
* Passing JSON request bodies
* Adding headers
* Testing JWT-protected routes
* Testing error responses
* Testing query parameters
* Testing route parameters

---

## Environment Variables

Sensitive information is stored using environment variables.

Example `.env` configuration:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

The `.env` file should never be committed to GitHub.

Example `.gitignore`:

```text
node_modules/
.env
```

---

## CORS

* Introduction to Cross-Origin Resource Sharing
* Connecting frontend and backend applications
* Allowing selected frontend origins
* Handling development and production URLs
* Configuring allowed methods
* Configuring headers
* Handling CORS errors

---

## Database Relationships

* One-to-one relationships
* One-to-many relationships
* Many-to-many relationships
* Referencing documents
* Embedding documents
* MongoDB Object IDs
* Mongoose population

---

## Security Concepts

* Password hashing
* JWT authentication
* Protected routes
* Role-based access control
* Environment variables
* Secure cookies
* Input validation
* Error-message handling
* Preventing sensitive data exposure
* CORS configuration
* Avoiding credentials in source code

---

## Deployment

Backend applications from this repository can be deployed using platforms such as:

* Render
* Railway
* Vercel Serverless Functions

Important production configurations include:

* Production environment variables
* MongoDB Atlas connection
* IP access configuration
* CORS setup
* Production start scripts
* Secure JWT secrets
* Error logging

---


The actual repository structure may vary depending on the organisation of course modules and assignments.

---

## Sample API Structure

```text
api/
├── controllers/
│   └── userController.js
├── models/
│   └── User.js
├── routes/
│   └── userRoutes.js
├── middleware/
│   └── authMiddleware.js
├── config/
│   └── database.js
├── app.js
└── server.js
```

---

## Basic Server Example

```javascript
const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend server is running"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

---

## API Response Format

A consistent API response structure is followed:

```json
{
  "success": true,
  "message": "Data fetched successfully",
  "data": {}
}
```

For errors:

```json
{
  "success": false,
  "message": "Something went wrong"
}
```

---

## How to Run the Projects

### Clone the repository

```bash
git clone https://github.com/LavanyaBanga/Complete-Coding-School-Backend.git
```

### Navigate to the repository

```bash
cd Complete-Coding-School-Backend
```

### Open a project folder

```bash
cd project-folder-name
```

### Install dependencies

```bash
npm install
```

### Create a `.env` file

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Start the development server

```bash
npm run dev
```

Or:

```bash
npm start
```

---

## Common Scripts

```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
```

---

## Backend Projects

The repository may include backend applications such as:

* User Authentication System
* Employee Management System
* Student Management System
* Hospital Management Backend
* Task Management API
* Product Management API
* Blog API
* E-commerce Backend
* REST API with MongoDB
* Google OAuth Authentication
* Employee Payroll Application
* CRUD Application using EJS
* Role-Based Authentication System

---

## Coding Practices Followed

* Modular folder structure
* Meaningful variable and function names
* Separation of concerns
* MVC architecture
* Reusable middleware
* Secure password handling
* Environment variable usage
* Proper HTTP status codes
* Structured API responses
* Centralised error handling
* Request validation
* Clean and readable code

---

## HTTP Status Codes Used

| Status Code | Meaning               |
| ----------- | --------------------- |
| `200`       | Request successful    |
| `201`       | Resource created      |
| `400`       | Bad request           |
| `401`       | Unauthorised          |
| `403`       | Forbidden             |
| `404`       | Resource not found    |
| `409`       | Conflict              |
| `500`       | Internal server error |

---

## Learning Outcomes

Through this course and repository, I learned how to:

* Build backend servers using Node.js
* Create web applications using Express.js
* Design RESTful APIs
* Perform CRUD operations
* Connect applications with MongoDB
* Create schemas and models using Mongoose
* Implement authentication using JWT
* Hash and verify passwords securely
* Create protected routes
* Implement role-based authorisation
* Work with cookies and sessions
* Handle errors globally
* Validate incoming data
* Test APIs using Postman
* Organise applications using MVC architecture
* Use Git and GitHub for version control
* Configure production environment variables
* Deploy backend applications

---

## Course Progress

This repository contains the complete backend development content covered during the course, including:

* Class codes
* Practice exercises
* Assignments
* Backend concepts
* Mini-projects
* API implementations
* Authentication systems
* Database integration
* Deployment practice

---

## Author

**Lavanya Banga**

B.Tech Computer Science and Engineering Student
Aspiring Software Developer and MERN Stack Developer

* GitHub: [LavanyaBanga](https://github.com/LavanyaBanga)
* Repository: [Complete-Coding-School-Backend](https://github.com/LavanyaBanga/Complete-Coding-School-Backend)

---

## Acknowledgement

I would like to thank **Complete Coding School** and the course mentors for providing structured backend development training, practical assignments, real-world projects, and continuous guidance throughout the course.

---

## Disclaimer

This repository is created for educational, learning, revision, and portfolio purposes. The code and projects represent my understanding and practical implementation of the concepts covered during the backend development course.

---

## License

This repository is maintained for educational purposes.
