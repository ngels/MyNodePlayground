//app/controllers/UsersController.js
const {User} = require('../models')
module.exports = {
async getUsers(req, res) {
const allUsers= await User.findAll({})
res.send(allUsers);
}};