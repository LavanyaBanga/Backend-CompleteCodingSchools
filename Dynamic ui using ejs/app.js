const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
let users = [];
app.get('/', (req, res) => {
    res.render('form');
});
app.post('/add', (req, res) => {
    const name = req.body.name;
    users.push(name);
    res.redirect('/users');
});
app.get('/users', (req, res) => {
    res.render('users', { users });
});

app.listen(4000, () => {
    console.log("Server running on http://localhost:4000");
});