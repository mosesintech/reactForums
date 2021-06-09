const { 
    findOne,
    findAll,
    findByParam,
    findManyByParam,
    addOne,
    updateOne,
    softDeleteOne,
    restoreDeletedOne,
    } = require('../../data/dataModel.js');

function getForums() {
    return findAll('forums');
}

function getForum(id) {
    return findOne('forums', id);
}

function getForumByName(name) {
    return findByParam('forums', { name });
}

function getForumByCategory(categoryID) {
    const category_id = categoryID;
    return findManyByParam('forums', { category_id });
}

async function addForum(forum) {
    const nameExists = await getForumByName(forum.name);
    if(nameExists) {
        throw new Error('Forum name is already in use.');
    }
    const newForum = {
        name: forum.name,
        description: forum.description,
        is_private: forum.isPrivate,
        category_id: forum.categoryID,
    }
    return addOne('forums', newForum);
}

async function updateForum(forum) {
    const idExists = await getForum(forum.id);
    if(!idExists) {
        throw new Error('This forum does not exists.');
    }
    const identicalName = idExists.name === forum.name;
    const identicalDescription = idExists.description === forum.description;
    const identicalSecurity = idExists.is_private === forum.isPrivate;
    const identicalParent = idExists.category_id.toString() === forum.categoryID;
   const noChange = identicalName && identicalDescription && identicalSecurity && identicalParent;
    if(noChange) {
        throw new Error('No forum changes submitted.');
    }
    const updatedForum = {
        name: forum.name,
        description: forum.description,
        is_private: forum.isPrivate,
        category_id: forum.categoryID,
    }
    return updateOne('forums', idExists.id, updatedForum);
}

async function deleteForum(id) {
    const idExists = await getForum(id);
    if(!idExists) {
        throw new Error('This forum does not exists.');
    }
    if(idExists.is_deleted) {
        throw new Error('This forum is already deleted.');
    }
    return softDeleteOne('forums', id);
}

async function restoreForum(id) {
    const idExists = await getForum(id);
    if(!idExists) {
        throw new Error('This forum does not exists.');
    }
    if(!idExists.is_deleted) {
        throw new Error('This forum is not deleted.');
    }
    return restoreDeletedOne('forums', id);
}

module.exports = {
    getForums,
    getForum,
    getForumByCategory,
    addForum,
    updateForum,
    deleteForum,
    restoreForum,
}