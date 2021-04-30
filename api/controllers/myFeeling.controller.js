const MyFeeling = require('../models/myFeeling.model');

class MyFeelingController {
    
    async create(feeling){
        return MyFeeling.create(feeling);
    };

    async feelingAll(feeling){
        return MyFeeling.find(feeling);
    };

    async searchFeelingByName(feeling){
        return MyFeeling.findOne(feeling);
    };

    async searchById(id) {
        return MyFeeling.findById(id);
    };

    async update(id,feeling) {
        return MyFeeling.findByIdAndUpdate(id,feeling);
    };

    async delete(id) {
        return MyFeeling.findByIdAndRemove(id);
    };
    
};

const myFeelingController = new MyFeelingController;
module.exports = myFeelingController;