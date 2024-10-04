const { Router } = require("express");
const { getAllUsers, getUserById, updatedUser } = require("../controllers/userController");

const route = Router()

route.get('/get-all-user',getAllUsers)
route.get('/get-user-by-id/:id', getUserById)
route.put('/update-user', updatedUser)
route.delete('/delete-user',deleteduser)

module.exports = route