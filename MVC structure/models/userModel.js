let users = [];
exports.getAllUsers = () => {
    return users;
};
exports.addUser = (name) => {
    users.push(name);
};