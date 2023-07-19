const User = require("../models/User");

class UserService{
    
    constructor(){
        this.user = new User();
        this.login();
    }

    login(){
        return this.user.getCredentials();
    }
}
module.exports = UserService;