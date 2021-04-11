const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const myFeelingSchema = new Schema(
    {
        name: {
            type: String
            
        },
        description: {
            type: String
        }
    });
    
    
module.exports = mongoose.model('MyFeeling', myFeelingSchema);