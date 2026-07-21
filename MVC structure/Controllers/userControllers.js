const userModel = require('../models/userModel');

exports.getForm = (req, res) => {//getform ki jgh kuch bbhi rkh skte h
    res.render('form', { pageTitle: 'Add User' });
};
exports.createUser = (req, res) => {
    const name = req.body.name;
    userModel.addUser(name);
    res.redirect('/users');
};

exports.getUsers = (req, res) => {
    const users = userModel.getAllUsers();
    res.render('users', { users, pageTitle: 'User List' });
};