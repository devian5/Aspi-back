const router = require('express').Router();
const doubleMeaning = require('../controllers/doubleMeaning.controller');
const Feeling = require('../models/doubleMeaning.model');

const createHandler = async (req,res) => {
    try {
        const newFeeling = new Feeling(req.body);
        const result = await doubleMeaning.create(newFeeling);

        res.json({result,date: new Date});
    } catch (error) {
        
        return res.status(500).json({
            message: error.message
        });
    };
};

const expressionAllHandler = async (req,res) => {
    try {
        const result = await doubleMeaning.expressionAll();
        
        res.json({result,date: new Date});
    } catch (error) {
        
        return res.status(500).json({
            message: error.message
        });
    };
};

const searchExpressionByNameHandler = async (req,res) => {
    try {
        const result = await doubleMeaning.searchExpressionByName(req.body);
        
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
        const result = await doubleMeaning.searchById(id);
        
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
        const result = await doubleMeaning.update(id,updateFeeling);

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
        const result = await doubleMeaning.delete(id);

        res.json({result,date: new Date});
    } catch (error) {

        return res.status(500).json({
            message: error.message
        });   
    };
};



router.post('/', createHandler);
router.get('/', expressionAllHandler);
router.get('/search', searchExpressionByNameHandler);
router.get('/:id', searchByIdHandler);
router.put('/:id', updateHandler);
router.delete('/:id', deleteHandler);

module.exports = router;