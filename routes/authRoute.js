const { Router } = require("express");
const { register, login, logout } = require("../controllers/authController");

const route = Router()

route.post('/register', register)
route.post('/login', login)
route.post('/logout',logout)

module.exports = route;