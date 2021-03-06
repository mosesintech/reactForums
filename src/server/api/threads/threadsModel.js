const {
  findOne,
  findAll,
  findByParam,
  findManyByParam,
  addOne,
  updateOne,
  softDeleteOne,
  restoreDeletedOne,
} = require('../../data/dataModel');

function getThreads() {
  return findAll('threads');
}

function getThread(id) {
  return findOne('threads', id);
}

function getThreadByTitle(title) {
  return findByParam('threads', { title });
}

async function getThreadsByUser(user) {
  const author = {
    author_id: user.id,
  };
  const { author_id } = author;
  const threads = await findManyByParam('threads', { author_id });
  return threads;
}

async function getThreadsByForum(forum) {
  const parent = {
    forum_id: forum.id,
  };
  const { forum_id } = parent;
  const threads = await findManyByParam('threads', { forum_id });
  return threads;
}

async function addThread(thread) {
  const titleExists = await getThreadByTitle(thread.title);
  if (titleExists) {
    throw new Error('Thread title is already in use.');
  }
  const newThread = {
    title: thread.title,
    text: thread.text,
    is_locked: thread.isLocked,
    forum_id: thread.forumID,
    author_id: thread.authorID,
  };
  return addOne('threads', newThread);
}

async function updateThread(thread) {
  const idExists = await getThread(thread.id);
  if (!idExists) {
    throw new Error('This thread does not exists.');
  }
  const identicalTitle = idExists.title === thread.title;
  const identicalText = idExists.text === thread.text;
  const identicalSecurity = idExists.is_locked === thread.isLocked;
  const identicalParent = idExists.forum_id.toString() === thread.forumID;
  const identicalAuthor = idExists.author_id.toString() === thread.authorID;
  const identicalContent = identicalTitle && identicalText;
  const identicalHierarchy = identicalParent && identicalAuthor;
  const noChange = identicalContent && identicalSecurity && identicalHierarchy;
  if (noChange) {
    throw new Error('No thread changes submitted.');
  }
  const updatedThread = {
    title: thread.title,
    text: thread.text,
    is_locked: thread.isLocked,
    forum_id: thread.forumID,
    author_id: thread.authorID,
  };
  return updateOne('threads', idExists.id, updatedThread);
}

async function deleteThread(id) {
  const idExists = await getThread(id);
  if (!idExists) {
    throw new Error('This thread does not exists.');
  }
  if (idExists.is_deleted) {
    throw new Error('This thread is already deleted.');
  }
  return softDeleteOne('threads', id);
}

async function restoreThread(id) {
  const idExists = await getThread(id);
  if (!idExists) {
    throw new Error('This thread does not exists.');
  }
  if (!idExists.is_deleted) {
    throw new Error('This thread is not deleted.');
  }
  return restoreDeletedOne('threads', id);
}

module.exports = {
  getThreads,
  getThread,
  getThreadsByUser,
  getThreadsByForum,
  addThread,
  updateThread,
  deleteThread,
  restoreThread,
};
