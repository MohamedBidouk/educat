
import {hash} from "bcrypt";
import User, {IUser} from "@/model/user";
import dbConnect from "@/lib/mongoose";
import {NextResponse} from "next/server";


export async function POST(req: Request) {
    try {
        await dbConnect();
        const { email, password, role } = await req.json();

        if (!email || !password) {
            return NextResponse.json({ error: "Email and password required" }, { status: 400 });
        }

        const hashedPassword = await hash(password, 10);

        const newUser = await User.create({
            email,
            password: hashedPassword,
            role: role || "user",
        });

        return NextResponse.json({ user: newUser }, { status: 201 });
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}

export async function GET() {
    try {
        await dbConnect();

        const users = await User.find().lean<IUser[]>().exec();

        return NextResponse.json({ users });
    } catch (err: any) {
        console.log(err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
