const express = require('express');
const app = express();

const userRoutes = require('./routes/userRoutes');
const errorController = require('./Controllers/errorController');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use('/', userRoutes);

// 404 Controller (Always Last)
app.use(errorController.get404);

app.listen(4000, () => {
    console.log("Server running on http://localhost:4000");
});