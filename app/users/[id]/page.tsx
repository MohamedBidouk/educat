"use client";
import { useEffect, useState } from "react";

type User = {
    _id: string;
    name: string;
    email: string;
};

export default function UsersPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [form, setForm] = useState({ name: "", email: "" });

    // جلب المستخدمين
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        fetch("/api/users")
            .then((res) => res.json())
            .then((data) => {
                // تأكد من أن البيانات مصفوفة
                if (Array.isArray(data)) {
                    setUsers(data);
                } else if (Array.isArray(data.users)) {
                    setUsers(data.users);
                } else {
                    setUsers([]);
                    console.warn("Unexpected API response:", data);
                }
            })
            .catch((err) => {
                console.error("Fetch error:", err);
                setUsers([]);
            });
    };

    // handle form change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // handle submit
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await fetch("/api/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            setForm({ name: "", email: "" }); // reset form
            fetchUsers(); // إعادة جلب البيانات
        } catch (err) {
            console.error("Submit error:", err);
        }
    };

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">Users Table</h1>

            {/* Table */}
            <table className="min-w-full border border-gray-300 mb-6">
                <thead>
                <tr className="bg-gray-100">
                    <th className="border px-4 py-2">ID</th>
                    <th className="border px-4 py-2">Name</th>
                    <th className="border px-4 py-2">Email</th>
                </tr>
                </thead>
                <tbody>
                {users.length === 0 ? (
                    <tr>
                        <td colSpan={3} className="border px-4 py-2 text-center">
                            No users found
                        </td>
                    </tr>
                ) : (
                    users.map((user) => (
                        <tr key={user._id}>
                            <td className="border px-4 py-2">{user._id}</td>
                            <td className="border px-4 py-2">{user.name}</td>
                            <td className="border px-4 py-2">{user.email}</td>
                        </tr>
                    ))
                )}
                </tbody>
            </table>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex gap-4">
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="border p-2 rounded"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="border p-2 rounded"
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Add User
                </button>
            </form>
        </div>
    );
}
