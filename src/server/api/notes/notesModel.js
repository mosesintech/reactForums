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

function getNotes() {
    return findAll('notes');
}

function getNote(id) {
    return findOne('notes', id);
}

async function getNotesByUser(userID) {
    const author_id = userID;
    const notes = await findManyByParam('notes', { author_id })
    return notes;
}

async function addNote(note) {
    const newNote = {
        title: note.title,
        text: note.text,
        is_locked: note.isLocked,
        is_private: note.isPrivate,
        author_id: note.authorID,
    }
    return addOne('notes', newNote);
}

async function updateNote(note) {
    const idExists = await getNote(note.id);
    if(!idExists) {
        throw new Error('This note does not exists.');
    }
    const identicalTitle = idExists.title === note.title;
    const identicalText = idExists.text === note.text;
    const identicalSecurity = idExists.is_locked === note.isLocked;
    const identicalPrivacy = idExists.is_private === note.isPrivate;
    const identicalAuthor = idExists.author_id.toString() === note.authorID;
    const noChange = identicalTitle && identicalText && identicalSecurity && identicalPrivacy && identicalAuthor;
    if(noChange) {
        throw new Error('No note changes submitted.');
    }
    const updatedNote = {
        title: note.title,
        text: note.text,
        is_locked: note.isLocked,
        is_private: note.isPrivate,
        author_id: note.authorID,
    }
    return updateOne('notes', idExists.id, updatedNote);
}

async function deleteNote(id) {
    const idExists = await getNote(id);
    if(!idExists) {
        throw new Error('This note does not exists.');
    }
    if(idExists.is_deleted) {
        throw new Error('This note is already deleted.');
    }
    return softDeleteOne('notes', id);
}

async function restoreNote(id) {
    const idExists = await getNote(id);
    if(!idExists) {
        throw new Error('This note does not exists.');
    }
    if(!idExists.is_deleted) {
        throw new Error('This note is not deleted.');
    }
    return restoreDeletedOne('notes', id);
}

module.exports = {
    getNote,
    getNotes,
    getNotesByUser,
    addNote,
    updateNote,
    deleteNote,
    restoreNote,
}