// testMongo.js
import { MongoClient } from "mongodb";

const uri = "mongodb+srv://mohamedlimem201:mohamed437124@cluster0.hq5crgw.mongodb.net/mydatabase?retryWrites=true&w=majority"; // عدّل بياناتك

async function test() {
    const client = new MongoClient(uri);
    try {
        await client.connect();
        const db = client.db("mydatabase"); // نفس اسم قاعدة البيانات
        const collections = await db.collections();
        console.log("Connected! Collections:", collections.map(c => c.collectionName));
    } catch (err) {
        console.error("Connection failed:", err);
    } finally {
        await client.close();
    }
}

test();
