"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
class Item {
    constructor(name, price, description, quantity) {
        this._id = new mongodb_1.ObjectId();
        this.name = name;
        this.price = price;
        this.description = description;
        this.quantity = quantity;
    }
    getId() {
        return this._id.toHexString();
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
    getDescription() {
        return this.description;
    }
    decreaseQuantity(quantity) {
        this.quantity -= quantity;
    }
    getQuantity() {
        return this.quantity;
    }
    save() {
        const collection = ; // get your MongoDB collection reference here
        return collection.insertOne(this);
    }
    static findById(id) {
        const collection = ; // get your MongoDB collection reference here
        return collection.findOne({ _id: new mongodb_1.ObjectId(id) });
    }
}
exports.default = Item;
