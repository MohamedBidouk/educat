import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!uri) throw new Error("ضع Mongo URI في .env.local");

if (process.env.NODE_ENV === "development") {
    // @ts-ignore
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri);
        // @ts-ignore
        global._mongoClientPromise = client.connect();
    }
    // @ts-ignore
    clientPromise = global._mongoClientPromise;
} else {
    client = new MongoClient(uri);
    clientPromise = client.connect();
}

export default clientPromise;
