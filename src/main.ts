import { connectToDatabase } from './database';
import Shop from './Shop';
import User from './User';
import Item from './Item';

async function main() {
  await connectToDatabase();

  // Create a Shop
  const shop = new Shop();

  // Create Items and add them to the shop
  const item1 = new Item('Item 1', 10, 'Description 1', 5);
  const item2 = new Item('Item 2', 20, 'Description 2', 3);
  const item3 = new Item('Item 3', 30, 'Description 3', 8);

  await item1.save();
  await item2.save();
  await item3.save();

  // Add stock to an item
  await shop.addStock(item1.getId(), 5);

  // Mark an item as out of stock
  await shop.markItemAsOutOfStock(item2.getId());

  // Get updated items
  const items = await shop.getItems();
  console.log(items);
}

main().catch((error) => console.error(error));

