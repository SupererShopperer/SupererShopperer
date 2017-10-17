class userModel {
    constructor(data) {
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.username = data.username;
        this.password = data.password;
        this.email = data.email;
    }
  }
  
  module.exports = userModel;