const db = require('./dbConfig');

function findAll(database) {
  return db(database);
}

function findOne(database, id) {
  return db(database).where({ id }).first();
}

function findByParam(database, param) {
  return db(database).where(param).first();
}

function findManyByParam(database, param) {
  return db(database).where(param);
}

async function addOne(database, item) {
  const [id] = await db(database).insert(item, 'id');
  return findOne(database, id);
}

async function updateOne(database, id, changes) {
  await db(database).where({ id }).update(changes);
  await db(database).where({ id }).update('modified_at', db.fn.now());
  return findOne(database, id);
}

async function softDeleteOne(database, id) {
  await db(database).where({ id }).update('is_deleted', true);
  await db(database).where({ id }).update('modified_at', db.fn.now());
  return findOne(database, id);
}

async function restoreDeletedOne(database, id) {
  await db(database).where({ id }).update('is_deleted', false);
  await db(database).where({ id }).update('modified_at', db.fn.now());
  return findOne(database, id);
}

module.exports = {
  findAll,
  findOne,
  findByParam,
  findManyByParam,
  addOne,
  updateOne,
  softDeleteOne,
  restoreDeletedOne,
};
