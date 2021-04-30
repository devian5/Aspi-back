const router = require('express').Router();
const myFeelingController = require('../controllers/myFeeling.controller');
const MyFeeling = require('../models/myFeeling.model');

const createHandler = async (req,res) => {
    try {
        const newFeeling = new MyFeeling(req.body);
        const result = await myFeelingController.create(newFeeling);

        res.json({result,date: new Date});
    } catch (error) {
        
        return res.status(500).json({
            message: error.message
        });
    };
};

const feelingAllHandler = async (req,res) => {
    try {
        const result = await myFeelingController.feelingAll();
        
        res.json({result,date: new Date});
    } catch (error) {
        
        return res.status(500).json({
            message: error.message
        });
    };
};

const searchFeelingByNameHandler = async (req,res) => {
    try {
        const result = await myFeelingController.searchFeelingByName(req.body);
        
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
        const result = await myFeelingController.searchById(id);
        
        res.json({result,date: new Date});
    } catch (error) {
        
        return res.status(500).json({
            message: error.message
        });
    };
};

const updateHandler = async (req,res) => {
    try {
        const updateFeeling = req.body;
        const id = req.params.id
        const result = await myFeelingController.update(id,updateFeeling);

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
        const result = await myFeelingController.delete(id);

        res.json({result,date: new Date});
    } catch (error) {

        return res.status(500).json({
            message: error.message
        });   
    };
};



router.post('/', createHandler);
router.get('/', feelingAllHandler);
router.get('/search', searchFeelingByNameHandler);
router.get('/:id', searchByIdHandler);
router.put('/:id', updateHandler);
router.delete('/:id', deleteHandler);

module.exports = router;