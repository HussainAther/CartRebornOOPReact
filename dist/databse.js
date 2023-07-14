"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCollection = exports.connectToDatabase = void 0;
const mongodb_1 = require("mongodb");
let db;
function connectToDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'mongodb+srv://dbUser:<password>@cluster0.ddvfvid.mongodb.net/?retryWrites=true&w=majority'; // replace with your MongoDB connection URL
        const dbName = 'shop-system'; // replace with your database name
        const client = new mongodb_1.MongoClient(url);
        try {
            yield client.connect();
            console.log('Connected to MongoDB');
            db = client.db(dbName);
        }
        catch (error) {
            console.error('Error connecting to MongoDB:', error);
        }
    });
}
exports.connectToDatabase = connectToDatabase;
function getCollection(collectionName) {
    return db.collection(collectionName);
}
exports.getCollection = getCollection;
