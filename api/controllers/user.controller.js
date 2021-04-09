const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'XM6LbtqyPgC7pch'

class UserController {

  async create(user) {
    user.password = await bcrypt.hash(user.password,5)
    return User.create(user);
  };

  async login(email,password) {
    const user =  await User.findOne({email});
    if(!user){
        throw new Error('The email does not exist')
    }
    if(!await bcrypt.compare(password,user.password)){
        throw new Error('Wrong password')
    };

    const payload = {
        userId: user.id,
        tokenCreationDate: new Date,
    }
    const token = jwt.sign(payload, secret);
    return {token, user}
    
  };

  async update(id,user) {
    return User.findByIdAndUpdate(id,user);
  };



};

const userController = new UserController;
module.exports = userController;