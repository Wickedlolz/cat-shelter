const Breed = require('../model/Breed');

async function getAll() {
    let result = await Breed.find({}).lean();

    return result;
}

function create(data) {
    let breed = new Breed(data);

    return breed.save();
}

module.exports = {
    getAll,
    create
}