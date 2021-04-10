const router = require('express').Router();
const feelingController = require('../controllers/feeling.controller');
const Feeling = require('../models/feeling.model');

const createHandler = async (req,res) => {
    try {
        const newFeeling = new Feeling(req.body);
        const result = feelingController.create(newFeeling);

        res.json({result,date: new Date});
    } catch (error) {
        
        return res.status(500).json({
            message: error.message
        });
    };
};

const feelingAllHandler = async (req,res) => {
    try {
        const result = feelingController.feelingAll();
        
        res.json({result,date: new Date});
    } catch (error) {
        
        return res.status(500).json({
            message: error.message
        });
    };
};

const searchFeelingByNameHandler = async (req,res) => {
    try {
        const result = feelingController.searchFeelingByName(req.body);
        
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
// router.put('/:id', updateHandler);
// router.delete('/:id', deleteHandler);
// router.get('/', feelingAllHandler);
// router.get('/:id', searchByIdHandler);

module.exports = router;