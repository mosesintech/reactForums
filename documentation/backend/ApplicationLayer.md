# Application Layer

The { reactForums } server is built with Node, Express, and GraphQL.
As such, the API is divided into Mutations and Queries.
What follows is a list of our API Operations, the arguments they take, and their outputs.

## A quick note on CRUD operations

For improved security and in anticipation of particular administrative issues, there is no hard or true delete operation.
Instead, there is added to each table a row called 'is_deleted' that is set to a boolean.
This provides us with the ability to soft delete our data, and also to restore it in case it was never meant to be deleted.
Doing this allows administrators to decouple their database from their { reactForums } instance and provides an extra layer of security should their { reactForums } installation be compromised; the besk a hacker can do is soft delete all things.
Because of this, the update, delete, and restore mutations in the following operations are actually all update operations.
If you find that you need to actually delete data, it is recommended that you simply DROP the needed table from the database directly.

<h1 style="text-align: center;">Users</h1>

## Queries

| Queries      | Description |
| ------------ | ----------- |
| getUsers     | A query that takes no arguments but returns an array of users. |
| getUser      | This query doesn't require any arguments, but will throw an Error if an ID, Username, or Email are not provided. Using the argument provided, this mutation will return a single user. |

## Mutations

| Mutations      | Description |
| ------------ | ----------- |
| addUser     | This mutation requires a username, email, and password. It does not take any other arguments. As the name implies, it creates a new user and returns details about this new user.|
| updateUser      | This mutation requires an ID, username, email, and password. It does not take any other arguments. It searches for the user by ID, and then compares the given values with the values in the database and if there are any differences it will update the database with the new values. Then it returns the updated user information. |
| deleteUser      | This mutation requires an ID and does not take any other arguments. It searches for the user by ID and then checks the boolean for isDeleted. If it is already true, it will throw an Error. If it is false, it turns it to true and returns the updated user information. |
| restoreUser      | This mutation requires an ID and does not take any other arguments. It searches for the user by ID and then checks the boolean for isDeleted. If it is already false, it will throw an Error. If it is true, it turns it to false and returns the updated user information. |

<h1 style="text-align: center;">Categories</h1>

## Queries

| Queries      | Description |
| ------------ | ----------- |
| getCategories| A query that takes no arguments but returns an array of categories. |
| getCategory  | This query requires a Category ID and will return a single category. |

## Mutations

| Mutations      | Description |
| -------------- | ----------- |
| addCategory    | This mutation requires a name and a description. It may also take a boolean value for isPrivate. As the name implies, it creates a new category and returns details about this new category.|
| updateCategory | This mutation requires an ID, name, description, and a boolean for isPrivate. It does not take any other arguments. It searches for the category by ID, and then compares the given values with the values in the database and if there are any differences it will update the database with the new values. Then it returns the updated category information. |
| deleteCategory | This mutation requires an ID and does not take any other arguments. It searches for the category by ID and then checks the boolean for isDeleted. If it is already true, it will throw an Error. If it is false, it turns it to true and returns the updated category information. |
| restoreCategory| This mutation requires an ID and does not take any other arguments. It searches for the category by ID and then checks the boolean for isDeleted. If it is already false, it will throw an Error. If it is true, it turns it to false and returns the updated category information. |

<h1 style="text-align: center;">Forums</h1>

## Queries

| Queries      | Description |
| ------------ | ----------- |
| getForums    | A |
| getForum     | This |

## Mutations

| Mutations      | Description |
| ------------ | ----------- |
| addForum     | This |
| updateForum  | This |
| deleteForum  | This |
| restoreForum | This |

<h1 style="text-align: center;">Threads</h1>

## Queries

| Queries       | Description |
| ------------- | ----------- |
| getThreads    | A |
| getThread     | This |

## Mutations

| Mutations     | Description |
| ------------- | ----------- |
| addThread     | This |
| updateThread  | This |
| deleteThread  | This |
| restoreThread | This |

<h1 style="text-align: center;">Posts</h1>

## Queries

| Queries     | Description |
| ----------- | ----------- |
| getPosts    | A |
| getPost     | This |

## Mutations

| Mutations   | Description |
| ----------- | ----------- |
| addPost     | This |
| updatePost  | This |
| deletePost  | This |
| restorePost | This |

<h1 style="text-align: center;">Notes</h1>

## Queries

| Queries     | Description |
| ----------- | ----------- |
| getNotes    | A |
| getNote     | This |

## Mutations

| Mutations   | Description |
| ----------- | ----------- |
| addNote     | This |
| updateNote  | This |
| deleteNote  | This |
| restoreNote | This |