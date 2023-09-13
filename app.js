import dotenv from "dotenv";
import {runServer} from "./server/server.js";

dotenv.config();
const port = parseInt(process.env.PORT || 3000);
const mongoUser = process.env.MONGO_ROOT_USER || "root";
const mongoPassword = process.env.MONGO_ROOT_PASSWORD || "example";
const mongoPort = process.env.MONGO_PORT || "27017";
const mongoDB = process.env.MONGO_INITIAL_DB || "tasks";
const mongoUri = `mongodb://${mongoUser}:${mongoPassword}@mongo:${mongoPort}/${mongoDB}?authSource=admin`;

runServer(port, mongoUri).catch(console.error);
