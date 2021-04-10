const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feelingSchema = new Schema(
    {
        name: {
            type: String
            
        },
        description: {
            type: String
        },
        picture: {
            type: String
        },
        example: {
            type: String
        }
    });
    
    
module.exports = mongoose.model('Feeling', feelingSchema);