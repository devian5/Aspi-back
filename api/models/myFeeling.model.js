const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const myFeelingSchema = new Schema(
    {   
        userId: {
            type: ObjectId
        },
        name: {
            type: String
            
        },
        description: {
            type: String
        }
    });
    
    
module.exports = mongoose.model('MyFeeling', myFeelingSchema);