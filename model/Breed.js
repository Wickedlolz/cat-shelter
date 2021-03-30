const mongoose = require('mongoose');

const breedShema = new mongoose.Schema({
    breed: String,
    age: Number

});

module.exports = mongoose.model('Breed', breedShema);