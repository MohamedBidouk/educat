// app/api/users/route.ts
import clientPromise from "@/lib/mongoose";

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db("mydatabase");
        const users = await db.collection("mohamed").find({}).toArray();
        return Response.json(users);
    } catch (error) {
        return Response.json({ error: "Failed to fetch users", details: error.message }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const client = await clientPromise;
        const db = client.db("mydatabase");
        const result = await db.collection("mohamed").insertOne(body);
        return Response.json(result);
    } catch (error) {
        return Response.json({ error: "Failed to add user", details: error.message }, { status: 500 });
    }
}
