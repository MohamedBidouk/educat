import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";


export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db("mydatabase");
        const content = await db.collection("arabicPoems").find({}).toArray();
        return NextResponse.json(content);
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const client = await clientPromise;
        const db = client.db("mydatabase");
        const result = await db.collection("arabicPoems").insertOne(body);
        return NextResponse.json(result);
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const client = await clientPromise;
        const db = client.db("test"); // غيّر الاسم لاسم قاعدة بياناتك
        const collection = db.collection("arabicPoems");

        const result = await collection.deleteOne({
            _id: new ObjectId(params.id),
        });

        if (result.deletedCount === 0) {
            return NextResponse.json({ error: "لم يتم العثور على العنصر" }, { status: 404 });
        }

        return NextResponse.json({ message: "تم الحذف بنجاح ✅" });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "خطأ في الخادم" }, { status: 500 });
    }
}
