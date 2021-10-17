npm init
package name: (tiktok-backend)
version: (1.0.0)
description: Tiktok backend
entry point: (index.js) server.js
test command:
git repository:
keywords:
author: Lifang Yan
license: (ISC)
About to write to /home/ly/Documents/VS/react/tiktok-backend/package.json:

{
"name": "tiktok-backend",
"version": "1.0.0",
"description": "Tiktok backend ",
"main": "server.js",
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1"
},
"author": "Lifang Yan",
"license": "ISC"
}

npm i express mongoose- use to connect to db

# Reference of MongoDB

https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

# Beginning use MongoDB

Begin using MongoDB.

Start a mongosh session on the same host machine as the mongod. You can run mongosh without any command-line options to connect to a mongod that is running on your localhost with default port 27017.

mongosh

# noSQL -> mongoDB

Collection -> [documents] -> Collection -> [...]

Collection like a table of SQL

Collection can have multiple documents

# Reference https://www.youtube.com/watch?v=g8yGxDMyGiE&t=3640s

MongoDB: 2:30min

# deploy application to Heroku

https://tiktok-mern-backend-ly.herokuapp.com
https://tiktok-mern-backend-ly.herokuapp.com/v1/posts
https://tiktok-mern-backend-ly.herokuapp.com/v2/posts
