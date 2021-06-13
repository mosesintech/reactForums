const {
  findOne,
  findAll,
  findManyByParam,
  addOne,
  updateOne,
  softDeleteOne,
  restoreDeletedOne,
} = require('../../data/dataModel');

function getPosts() {
  return findAll('posts');
}

function getPost(id) {
  return findOne('posts', id);
}

async function getPostsByUser(user) {
  const author = {
    author_id: user.id,
  };
  const { author_id } = author;
  const posts = await findManyByParam('posts', { author_id });
  return posts;
}

async function addPost(post) {
  const newPost = {
    text: post.text,
    is_locked: post.isLocked,
    thread_id: post.threadID,
    author_id: post.authorID,
  };
  return addOne('posts', newPost);
}

async function updatePost(post) {
  const idExists = await getPost(post.id);
  if (!idExists) {
    throw new Error('This post does not exists.');
  }
  const sameText = idExists.text === post.text;
  const sameSecurity = idExists.is_locked === post.isLocked;
  const sameParent = idExists.thread_id.toString() === post.threadID;
  const sameAuthor = idExists.author_id.toString() === post.authorID;
  const noChange = sameText && sameSecurity && sameParent && sameAuthor;
  if (noChange) {
    throw new Error('No post changes submitted.');
  }
  const updatedPost = {
    text: post.text,
    is_locked: post.isLocked,
    thread_id: post.threadID,
    author_id: post.authorID,
  };
  return updateOne('posts', idExists.id, updatedPost);
}

async function deletePost(id) {
  const idExists = await getPost(id);
  if (!idExists) {
    throw new Error('This post does not exists.');
  }
  if (idExists.is_deleted) {
    throw new Error('This post is already deleted.');
  }
  return softDeleteOne('posts', id);
}

async function restorePost(id) {
  const idExists = await getPost(id);
  if (!idExists) {
    throw new Error('This post does not exists.');
  }
  if (!idExists.is_deleted) {
    throw new Error('This post is not deleted.');
  }
  return restoreDeletedOne('posts', id);
}

module.exports = {
  getPost,
  getPosts,
  getPostsByUser,
  addPost,
  updatePost,
  deletePost,
  restorePost,
};
