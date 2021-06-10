# Tech Stack

Our full stack app makes use of Next.js: a full stack React.js framework that gives us freedom regarding server/client side generation and allows us to build our server right into it.
Because { reactForums } wants to be mobile ready out of the box, it was expedient for us to develop in a language that would allow us to build something powerful across the whole stack.
For this reason { reactForums } is built with the JavaScript framework called React.js and is called { reactForums }.
For mobile development, we will be using React Native so that we can share code across the browser and mobile apps.

# Frontend

As you can tell by the name, our Frontend and Mobile apps will be using Facebook's React.js.
The primary reason for this is code sharing and ease of development between platforms, and quick turnaround times for iterations.
Both the Frontend and the Backend will be using GraphQL for a number of reasons.
Regarding the Frontend, fetching the exact data necessary for each component is primary among them.
Secondarily, it reduces the need for global state management, which though we still use we will not need to clutter with certain data in certain components.
For the sake of size, we have avoided tools like Apollo and have chosen Urql for our frontend GraphQL calls.
As far as state management goes, we will be utilizing Redux and Redux Toolkit.

# Backend

Our backend is built with Next.js, and is therefore a Node server. We have decided to use the Express framework for our server, GraphQL for our application layer, Knex.js for our data access layer, and PostgreSQL as our database.
We have made these decisions for a few reasons.
As for PostgreSQL over no-SQL options like Graph Databases, this is primarily for our administrators who we hope to be a broad audience.
For their sake, we would prefer to use a free SQL database option so as not to hinder { reactForums } use in any way.
Since our application is a full stack Javascript app, Knex.js was a natural choice with interfacing with our database.
GraphQL made the most sense for our application layer for a few reasons.
First, using GraphQL for the full stack allows us to save on frontend as mentioned above.
Additionally, GraphQL comes with benefit over using REST like avoiding over-/under-fetching data, saving time/bandwidth, and other helpful features.
We have intentionally avoided Apollo, not for quality's sake, but for size concerns.
Because of this we have used Express GraphQL, and for readability's sake have decided upon a code-first rather than a schema-first approach to development.
