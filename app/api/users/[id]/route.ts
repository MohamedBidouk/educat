import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function GET(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const client = await clientPromise;
        const db = client.db("mydatabase");

        const user = await db
            .collection("mohamed")
            .findOne({ _id: new ObjectId(params.id) });

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json(user);
    } catch (err: any) {
        console.error("GET /api/users/[id] error:", err);
        return NextResponse.json(
            { error: "Failed to fetch user", details: err.message },
            { status: 500 }
        );
    }
}
