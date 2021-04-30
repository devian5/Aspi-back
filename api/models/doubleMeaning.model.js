const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doubleMeaningSchema = new Schema(
    {
        expression: {
            type: String
            
        },
        meaning: {
            type: String
        }
    });
    
    
module.exports = mongoose.model('DoubleMeaning', doubleMeaningSchema);