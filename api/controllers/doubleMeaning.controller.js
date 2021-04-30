const DoubleMeaning = require('../models/doubleMeaning.model');

class FeelingController {
    
    async create(expression){
        return DoubleMeaning.create(expression);
    };

    async expressionAll(expression){
        return DoubleMeaning.find(expression);
    };

    async searchExpressionByName(expression){
        return DoubleMeaning.findOne(expression);
    };

    async searchById(id) {
        return DoubleMeaning.findById(id);
    };

    async update(id,expression) {
        return DoubleMeaning.findByIdAndUpdate(id,expression);
    };

    async delete(id) {
        return DoubleMeaning.findByIdAndRemove(id);
    };
    
};

const feelingController = new FeelingController;
module.exports = feelingController;