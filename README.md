# Task Manager Express.js Backend  
This is a basic [express.js](https://expressjs.com/) project with [mongo](https://www.mongodb.com/) database. 
The project has public endpoints to list (with filtering), create, update and delete tasks.
It uses [mongoose](https://mongoosejs.com/) schema to map a model to a database structure.

Missing items:
- Need to improve error handling and messaging
- Should create logging to get information about not handled errors
- Unit testing
- E2E testing

---
## Requirement
- Install [docker](https://www.docker.com/)
- Install [node.js](https://nodejs.org/en)

## Install
For local development the necessary dependencies can be installed with `npm i`

Copy `.env.example` to `.env` and replace the config parameters if necessary

### Environment variables:

`DOCKER_TARGET=development`
The project uses a multi-stage dockerfile, this controls the target stage during the build process.
The development stage uses `nodemon` to help with reload but the production image starts the application without debugging.  

`NODE_ENV=dev`
To write out the stack trace to console.

`PORT=8000`
The backend application will be reachable via this port.

`MONGO_ROOT_USER=root`

`MONGO_ROOT_PASSWORD=example`

`MONGO_PORT=27017`

`MONGO_INITIAL_DB=tasks`

## Usage
For local usage please run `docker-compose up` in the root directory.

## Docker
The services are composed of the backend container that uses a base node:latest 
image and a database container that uses a base mongo image.

## Important libraries
- [express.js](https://expressjs.com/)
- [mongoose.js](https://mongoosejs.com/)

---
#### Author: Daniel Szunomar
