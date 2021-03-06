const router = require('express').Router();
const userController = require('../controllers/user.controller');
const User = require('../models/user.model');


const createHandler = async (req,res) => {
    try {
        const newUser = new User(req.body);
        const result = await userController.create(newUser);

        res.json({result,date: new Date});
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    };
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
        return res.status(500).json({
            message: error.message
        });
    };
};

const deleteHandler = async (req,res) => {
    try {
        const id = req.params.id;
        const result = await userController.delete(id);

        res.json({result,date: new Date});
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });   
    };
};

const userAllHandler = async (req,res) => {
    try {
        const result = await userController.userAll();
        
        res.json({result,date: new Date});
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    };

};

const searchByIdHandler = async (req,res) => {
    try {
        const id = req.params.id;
        const result = await userController.searchById(id);
        res.json({result,date: new Date});
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    };
};


router.post('/', createHandler);
router.post('/login', loginHandler);
router.put('/:id', updateHandler);
router.delete('/:id', deleteHandler);
router.get('/', userAllHandler);
router.get('/:id', searchByIdHandler);

module.exports = router;