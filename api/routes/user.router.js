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

const loginHandler = async (req,res) => {
    try {
        const {email,password} = req.body;
        const jwt = await userController.login(email,password);
        
        const token = jwt.token;
        const user = jwt.user;

        res.json({token,user, date: new Date});
    } catch (error) {
        return res.status(401).json({
            message: error.message
        });
    };    
};

const updateHandler = async (req,res) => {
    try {
        const updateUser = req.body;
        const id = req.params.id
        const result = await userController.update(id,updateUser);

        res.json({result,date: new Date});
    } catch (error) {
        console.log(error);  
    };
};



router.post('/', createHandler);
router.post('/login', loginHandler);
router.put('/:id', updateHandler);



module.exports = router;