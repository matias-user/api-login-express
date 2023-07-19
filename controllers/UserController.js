const { response } = require("express");
const UserService = require("../Services/UserService");

const login = (req, res = response) => {

    const userService = new UserService();
    
    res.json(userService.login());
}

module.exports = {
    login
}