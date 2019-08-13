# ubuy-poc

This is a proof of concept for the assignment and what the app might structurally look like.

This is super simple with each app separated into its own functional layer (Frontend, Backend and Data access) this is easiest in the sense of separating concerns between what code is supposed to deal with. This was there is no question where display or business logic should sit.

I've written a `README.md` in each directory corresponding to the app layer to explain the functionality and technology of that layer a little more.

---

## Technology

This stack uses the following technologies. Heres some pros and cons for them plus some good reading for developing with them.

### DB Layer - [MongoDB](https://www.mongodb.com/)

MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schema.

Pros:

- schema-less. If you have a flexible schema, this is ideal for a document store like MongoDB. This is difficult to implement in a performant manner in RDBMS

Cons:

- less flexibity with querying like no JOINS

### Backend Layer - [ExpressJs](https://expressjs.com/)

Express.js, or simply Express, is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.

Pros:

- Easy to learn if your JavaScript knowledge is acceptable because it uses no exotic syntax or program structure
- Quick to get something working with not too many lines of code
- Well documented by their own documentation online, plus there's a wealth of examples and tutorials that others have published online too
- It's highly flexible for all different kinds of API requirements
- It supports middlewares which are easy to create yourself or add one that you've installed for many different scenarios, such as making sure all routes past a certain point in a REST API have data available, or adding security checks that allow/disallow accessing routes based on the request or whatever criteria is deemed relevant
- There's a huge number of packages available on NPM that work great together with Express to extend its capabilities and remove the burden of needing to deal with a lot of common situations faces in API development (e.g. security)

Cons:

- It's not opinionated in how it preferred to be implemented in your app and won't hold your hand in showing you how to structure an efficient Express app. This isn't always a con, but I consider it one because a beginner won't know the optimal way to structure their server code and can easily write code that slows down their REST API unnecessarily, or worse yet: expose vulnerabilities that malicious folks could take advantage of. My first few attempts at writing Express apps resulted in very messy spaghetti code that was difficult to follow
- It's not big on security, as just mentioned above. But more than that, Express doesn't dictate how security is implemented either - that's entirely up to your app. Arguably not a con because Express is basically just a library and can be used in any number of different ways, and it's up to the developer in their particular situation what degree of security that they require

### Frontend Layer - [React](https://reactjs.org/)

React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications, as it is optimal for fetching rapidly changing data that needs to be recorded

Pros:
- Biggest community and code owned and maintained by Facebook.
- Big ecosystem
- Flexibility
- Scalable
- Can be used for native and web apps
- Medium learning curve
- Fast rendering with Virtual-DOM

Cons:
- Requires to learn JSX and is more programmer-oriented.
- It’s kind of verbose. Writing components isn’t as straight forward as pure HTML & JS
- Being too flexible in structure can be problematic
- Community conventions are still developing. So far there is no defined methodology on how to implement React.
- In React, everything is just JavaScript
- Legacy code from the current Angular 1.5 needs a total rewrite in JSX

---

## Running

### Requirements

1. Download and install mongodb for you platform from https://www.mongodb.com/download-center
2. Download and install node for your platform from
   https://nodejs.org/en/download/
3. Install yarn `npm install -g yarn`
4. In the root of this repo run `yarn run install-all`

### Start the stack

Note: Complete all of these steps in a different terminal session and run all of these commands in the root of this repo

1. Start the db layer with `yarn start dev-db`
2. Start the backend layer with `yarn start dev-backend`
3. Start the frontend with yarn `start dev-frontend`

All layers should now be ready. You can access the ui at http://localhost:3000 and the api can be accessed at http://localhost:4000

---
