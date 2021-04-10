const Feeling = require('../models/feeling.model');

class FeelingController {
    async create(feeling){
        return Feeling.create(feeling);
    }
};

const feelingController = new FeelingController;
module.exports = feelingController;