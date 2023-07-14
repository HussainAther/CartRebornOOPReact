"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
class User {
    constructor(name, age) {
        this._id = new mongodb_1.ObjectId();
        this.name = name;
        this.age = age;
        this.cart = [];
    }
    getId() {
        return this._id.toHexString();
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    addToCart(itemId) {
        this.cart.push(new mongodb_1.ObjectId(itemId));
    }
    removeFromCart(itemId) {
        this.cart = this.cart.filter((cartItemId) => cartItemId.toHexString() !== itemId);
    }
    removeQuantityFromCart(itemId, quantity) {
        const count = quantity;
        this.cart = this.cart.filter((cartItemId) => {
            if (count > 0 && cartItemId.toHexString() === itemId) {
                count--;
                return false;
            }
            return true;
        });
    }
    cartTotal() {
        const collection = ; // get your MongoDB collection reference here
        return collection
            .aggregate([
            { $match: { _id: { $in: this.cart } } },
            { $group: { _id: null, total: { $sum: '$price' } } },
        ])
            .toArray()
            .then((result) => (result.length > 0 ? result[0].total : 0));
    }
    printCart() {
        const collection = ; // get your MongoDB collection reference here
        return collection
            .find({ _id: { $in: this.cart } })
            .toArray()
            .then((items) => {
            console.log(`Items in ${this.getName()}'s cart:`);
            items.forEach((item) => {
                console.log(`- ${item.name}: $${item.price}`);
            });
        });
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
exports.default = User;
