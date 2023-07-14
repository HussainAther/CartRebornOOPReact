import { ObjectId } from 'mongodb';

class Item {
  private _id: ObjectId;
  private name: string;
  private price: number;
  private description: string;
  private quantity: number;

  constructor(name: string, price: number, description: string, quantity: number) {
    this._id = new ObjectId();
    this.name = name;
    this.price = price;
    this.description = description;
    this.quantity = quantity;
  }

  public getId(): string {
    return this._id.toHexString();
  }

  public getName(): string {
    return this.name;
  }

  public getPrice(): number {
    return this.price;
  }

  public getDescription(): string {
    return this.description;
  }

  public decreaseQuantity(quantity: number): void {
    this.quantity -= quantity;
  }

  public getQuantity(): number {
    return this.quantity;
  }

  public save(): Promise<void> {
    const collection = // get your MongoDB collection reference here
    return collection.insertOne(this);
  }

  public static findById(id: string): Promise<Item | null> {
    const collection = // get your MongoDB collection reference here
    return collection.findOne({ _id: new ObjectId(id) });
  }
}

export default Item;

