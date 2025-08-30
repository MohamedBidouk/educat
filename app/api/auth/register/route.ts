import { connectDB } from "../../../../lib/mongodb";


export async function POST(req: Request) {
    try {
        await connectDB();
        const { email, password, role } = await req.json();

        if (!email || !password) {
            return new Response(JSON.stringify({ error: "Email and password required" }), { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            email,
            password: hashedPassword,
            role: role || "user",
        });

        return new Response(JSON.stringify({ success: true, user: newUser }), { status: 201 });
    } catch (err: any) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}
