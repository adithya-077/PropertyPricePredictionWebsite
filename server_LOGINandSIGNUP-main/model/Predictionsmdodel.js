const mongoose = require("mongoose");

const predictionSchema = mongoose.Schema({
    location:{
        require:true,
        type: String,
        trim:true,       
    },
    price:{
        require:true,
        type: String,
        trim:true,
    },
    bhk:{
        require:true,
        type: String,
        trim:true,
    },
    bath:{
        require:true,
        type: String,
        trim:true,
    },
    sqft:{
        require:true,
        type: String,
        trim:true,
    },
    email :{
        require:true,
        type: String,
        trim:true,
    },
});

const Prediction = mongoose.model('Prediction',predictionSchema);
module.exports = Prediction;