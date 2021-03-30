const mongoose = require('mongoose');

const catShema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Cat', catShema);