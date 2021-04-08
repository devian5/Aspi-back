const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const secret = process.env.JWT_SECRET || 'pepesecret'

class UserController {

  async create(user) {
    user.password = await bcrypt.hash(user.password,5)
    console.log(user)
   return User.create(user);
  };

};

const userController = new UserController;
module.exports = userController;