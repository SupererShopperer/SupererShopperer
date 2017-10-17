const db = require('../db');
const loginHandler = require('login-with-github')({
    client_id: '174cd191a b6c866f3007',
    client_secret:'7bc6aee9827703c5faf8e35763d89cf97c091e60',
    login_path: '/login/github'
});

const userController = {};



module.exports = userController;