import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";

dotenv.config();
const mongoClient = mongodb.MongoClient;
const backendPort = process.env.BACKEND_PORT || 8000;  // if backend port not specified in .env file, use 8000
