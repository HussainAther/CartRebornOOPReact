import { MongoClient, Db } from 'mongodb';

let db: Db;

export async function connectToDatabase(): Promise<void> {
  const url = 'mongodb+srv://dbUser:<password>@cluster0.ddvfvid.mongodb.net/?retryWrites=true&w=majority'; // replace with your MongoDB connection URL
  const dbName = 'shop-system'; // replace with your database name

  const client = new MongoClient(url);

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    db = client.db(dbName);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

export function getCollection(collectionName: string) {
  return db.collection(collectionName);
}

