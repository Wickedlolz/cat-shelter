const Cat = require('../model/Cat');

async function getAll(query) {
    let result = await Cat.find({}).lean();

    return result;
}

async function updateCat(id, data) {
    return await Cat.updateOne({ _id: id }, {
        name: data.name,
        description: data.description,
        imageUrl: data.imageUrl,
        breed: data.breed
    });
}

async function deleteCat(id) {
    return await Cat.deleteOne({ _id: id }, function (err) {
        if (err) {
            return err;
        }
    });
}

function getOneWithId(id) {
    return Cat.findById(id).populate('Cat').lean();
}

function create(data) {
    let cat = new Cat(data);

    return cat.save();
}

module.exports = {
    getAll,
    create,
    getOneWithId,
    updateCat,
    deleteCat
}