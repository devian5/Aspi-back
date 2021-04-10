const Feeling = require('../models/feeling.model');

class FeelingController {
    
    async create(feeling){
        return Feeling.create(feeling);
    };

    async feelingAll(feeling){
        return Feeling.find(feeling);
    };

};

const feelingController = new FeelingController;
module.exports = feelingController;