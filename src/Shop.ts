import Item from './Item';
import { getCollection } from './database';

class Shop {
  private collection = getCollection('items');

  public async addItem(item: Item): Promise<void> {
    await this.collection.insertOne(item);
  }

  public async getItems(): Promise<Item[]> {
    return this.collection.find().toArray();
  }

  public async addStock(itemId: string, quantity: number): Promise<boolean> {
    const item = await this.getItemById(itemId);
    if (item) {
      item.decreaseQuantity(-quantity);
      await this.collection.updateOne({ _id: new ObjectId(itemId) }, { $set: { quantity: item.getQuantity() } });
      return true;
    }
    return false;
  }

  public async markItemAsOutOfStock(itemId: string): Promise<boolean> {
    const item = await this.getItemById(itemId);
    if (item) {
      item.decreaseQuantity(item.getQuantity());
      await this.collection.updateOne({ _id: new ObjectId(itemId) }, { $set: { quantity: item.getQuantity() } });
      return true;
    }
    return false;
  }

  private async getItemById(itemId: string): Promise<Item | null> {
    return this.collection.findOne({ _id: new ObjectId(itemId) });
  }

}

export default Shop;

