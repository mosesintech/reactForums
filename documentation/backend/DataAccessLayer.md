# Data Access Layer

This layer, admittedly, is pretty thin and includes a single directory: ./src/server/data.
Because our server is Node/Express and our database is PostgreSQL, we're using Knex for our data access.
It is our opinion that ORMs for Knex obscure the code rather than help, so we have forgone the use of one.

# The Data Model

Because almost every application that exists follows the CRUD model (Create, Read, Update, and Delete), we have found it helpful to have a single file that contains the needful CRUD data access functions and to use these in our Business Logic Layer wherever necessary.
These functions are findAll, findOne, findByParam, addOne, updateOne, softDeleteOne, and restoreDeletedOne.
The first three are Read functions that will find and return data from the database.
"findAll" returns an array of items.
"findOne" returns a single item using the id.
"findByParam" returns a single item using a given argument.
This expects the param to actually be a column in the database, and so camelCase items from the Application Layer need to be formatted into snake_case in order to perform the search.
"addOne" will add and return single item.
"updateOne" will update and return a single item.
"softDeleteOne" and "restoreDeletedOne" are both technically Update operations and will simply toggle the is_deleted column.
Each of these functions expect the first argument passed in to be the name of the database you wish to access.

# Hard vs Soft Delete

Normal to most applications is the ability to hard delete data.
Commonly, the hard delete is called and simply is just a delete.
Two situations alone were enough for us to justify our decision to avoid hard deletes in our data access layer: 1) In the case of hacking, and 2) in the case of mistakenly deleted content.
In the first case, should your { reactForums } installation be compromised and we were to use hard deletes, then it would be simple for the hacker to delete all of your data from the Admin Dashboard.
Implementing soft deletes would demand the hacker to gain access to your database directly in order to DROP content.
Against such a case, not only have we implemented soft deletes instead, but highly recommend unique and strong passwords as well as regular database backups.
Regarding the second, less serious situation, it is possible and does happen that a user will accidentally delete an item such as a picture, video, post, or even their account on accident, or they will delete it purposefully but regret it shortly afterwards and ask application administrators if they could restore their data.
Likewise, it is just as simple for administrators to mistakenly delete categories, forums, users, and large or small swathes of content.
For the sake of administrators, moderators, and users, we have gone the route of soft deletes that can be easily restored should the need arise.
For future releases, we will discuss the need to add options to permanently remove soft deleted content after a period of time or through the admin panel.