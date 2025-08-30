import Link from "next/link";

type User = {
    _id: string;
    name: string;
    email: string;
};

// جلب المستخدمين من API بشكل آمن
async function getUsers(): Promise<User[]> {
    try {
        const res = await fetch("http://localhost:3000/api/users");

        // تحقق من حالة الاستجابة
        if (!res.ok) {
            console.error("API returned error:", res.status, res.statusText);
            return [];
        }

        const data = await res.json();
        console.log("API Response:", data); // لمعرفة شكل البيانات الحقيقية

        // تحويل البيانات لمصفوفة حتى لو كانت داخل كائن
        if (Array.isArray(data)) return data;
        if (Array.isArray(data.users)) return data.users;
        // fallback لتجنب الخطأ
        return [];
    } catch (err) {
        console.error("Fetch error:", err);
        return [];
    }
}

export default async function UsersPage() {
    const users = await getUsers();

    return (
        <div>
            <h1>Users List</h1>
            {users.length === 0 ? (
                <p>No users found.</p>
            ) : (
                <ul>
                    {users.map((user) => (
                        <li key={user._id}>
                            {user.name} - {user.email} -{" "}
                            <Link href={`/users/${user._id}`}>View</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
