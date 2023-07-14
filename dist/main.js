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
const Shop_1 = require("./Shop");
const Item_1 = require("./Item");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, database_1.connectToDatabase)();
        // Create a Shop
        const shop = new Shop_1.default();
        // Create Items and add them to the shop
        const item1 = new Item_1.default('Item 1', 10, 'Description 1', 5);
        const item2 = new Item_1.default('Item 2', 20, 'Description 2', 3);
        const item3 = new Item_1.default('Item 3', 30, 'Description 3', 8);
        yield item1.save();
        yield item2.save();
        yield item3.save();
        // Add stock to an item
        yield shop.addStock(item1.getId(), 5);
        // Mark an item as out of stock
        yield shop.markItemAsOutOfStock(item2.getId());
        // Get updated items
        const items = yield shop.getItems();
        console.log(items);
    });
}
main().catch((error) => console.error(error));
