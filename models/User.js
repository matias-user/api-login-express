
class User{
    nameUser = "admin";
    password = "123";

    getCredentials(){
       return {
        nameUser: this.nameUser,
        password: this.password,
       }
       
    }
}

module.exports = User;