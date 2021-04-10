const Feeling = require('../models/feeling.model');

class FeelingController {
    
    async create(feeling){
        return Feeling.create(feeling);
    };

    async feelingAll(feeling){
        return Feeling.find(feeling);
    };

    async searchFeelingByName(feeling){
        return Feeling.findOne(feeling);
    };

    async update(id,feeling) {
        return Feeling.findByIdAndUpdate(id,feeling);
      };
    

};

const feelingController = new FeelingController;
module.exports = feelingController;