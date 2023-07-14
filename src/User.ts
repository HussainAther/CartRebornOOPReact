import { ObjectId } from 'mongodb';
import Item from './Item';

class User {
  private _id: ObjectId;
  private name: string;
  private age: number;
  private cart: ObjectId[];

  constructor(name: string, age: number) {
    this._id = new ObjectId();
    this.name = name;
    this.age = age;
    this.cart = [];
  }

  public getId(): string {
    return this._id.toHexString();
  }

  public getName(): string {
    return this.name;
  }

  public getAge(): number {
    return this.age;
  }

  public addToCart(itemId: string): void {
    this.cart.push(new ObjectId(itemId));
  }

  public removeFromCart(itemId: string): void {
    this.cart = this.cart.filter((cartItemId) => cartItemId.toHexString() !== itemId);
  }

  public removeQuantityFromCart(itemId: string, quantity: number): void {
    const count = quantity;
    this.cart = this.cart.filter((cartItemId) => {
      if (count > 0 && cartItemId.toHexString() === itemId) {
        count--;
        return false;
      }
      return true;
    });
  }

  public cartTotal(): Promise<number> {
    const collection = // get your MongoDB collection reference here
    return collection
      .aggregate([
        { $match: { _id: { $in: this.cart } } },
        { $group: { _id: null, total: { $sum: '$price' } } },
      ])
      .toArray()
      .then((result) => (result.length > 0 ? result[0].total : 0));
  }

  public printCart(): Promise<void> {
    const collection = // get your MongoDB collection reference here
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

  public save(): Promise<void> {
    const collection = // get your MongoDB collection reference here
    return collection.insertOne(this);
  }

  public static findById(id: string): Promise<User | null> {
    const collection = // get your MongoDB collection reference here
    return collection.findOne({ _id: new ObjectId(id) });
  }
}

export default User;

