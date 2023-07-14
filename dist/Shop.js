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
const database_1 = require("./database");
class Shop {
    constructor() {
        this.collection = (0, database_1.getCollection)('items');
    }
    addItem(item) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.collection.insertOne(item);
        });
    }
    getItems() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.collection.find().toArray();
        });
    }
    addStock(itemId, quantity) {
        return __awaiter(this, void 0, void 0, function* () {
            const item = yield this.getItemById(itemId);
            if (item) {
                item.decreaseQuantity(-quantity);
                yield this.collection.updateOne({ _id: new ObjectId(itemId) }, { $set: { quantity: item.getQuantity() } });
                return true;
            }
            return false;
        });
    }
    markItemAsOutOfStock(itemId) {
        return __awaiter(this, void 0, void 0, function* () {
            const item = yield this.getItemById(itemId);
            if (item) {
                item.decreaseQuantity(item.getQuantity());
                yield this.collection.updateOne({ _id: new ObjectId(itemId) }, { $set: { quantity: item.getQuantity() } });
                return true;
            }
            return false;
        });
    }
    getItemById(itemId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.collection.findOne({ _id: new ObjectId(itemId) });
        });
    }
}
exports.default = Shop;
