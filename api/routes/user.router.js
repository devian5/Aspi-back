const router = require('express').Router();
const userController = require('../controllers/user.controller');
const User = require('../models/user.model');


const createHandler = async (req,res) => {
    try {
        const newUser = new User(req.body);
        const result = await userController.create(newUser);

        res.json({result,date: new Date});
    } catch (error) {
        console.log(error); 
    }
};

router.post('/', createHandler);

module.exports = router;