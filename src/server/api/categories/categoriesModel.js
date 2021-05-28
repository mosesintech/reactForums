const { 
    findOne,
    findAll,
    findByParam,
    addOne,
    updateOne,
    softDeleteOne,
    restoreDeletedOne,
    } = require('../../data/dataModel.js');

function getCategories() {
    return findAll('categories');
}

function getCategory(id) {
    return findOne('categories', id);
}

function getCategoryByName(name) {
    return findByParam('categories', { name });
}

async function addCategory(category) {
    const nameExists = await getCategoryByName(category.name);
    if(nameExists) {
        throw new Error('Category name is already in use.');
    }
    const newCategory = {
        name: category.name,
        description: category.description,
        is_private: category.isPrivate,
    }
    return addOne('categories', newCategory);
}

async function updateCategory(category) {
    const idExists = await getCategory(category.id);
    if(!idExists) {
        throw new Error('This category does not exists.');
    }
    const identicalName = idExists.name === category.name;
    const identicalDescription = idExists.description === category.description;
    const noChange = identicalName && identicalDescription;
    if(noChange) {
        throw new Error('No category changes submitted.');
    }
    return updateOne('categories', idExists.id, category);
}

async function deleteCategory(id) {
    const idExists = await getCategory(id);
    if(!idExists) {
        throw new Error('This category does not exists.');
    }
    if(idExists.is_deleted) {
        throw new Error('This category is already deleted.');
    }
    return softDeleteOne('categories', id);
}

async function restoreCategory(id) {
    const idExists = await getCategory(id);
    if(!idExists) {
        throw new Error('This category does not exists.');
    }
    if(!idExists.is_deleted) {
        throw new Error('This category is not deleted.');
    }
    return restoreDeletedOne('categories', id);
}

module.exports = {
    getCategories,
    getCategory,
    addCategory,
    updateCategory,
    deleteCategory,
    restoreCategory,
}