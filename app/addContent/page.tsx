'use client';

import { useState } from "react";

export default function AddContentPage() {
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [img, setImg] = useState("");
    const [category, setCategory] = useState("كتب مدرسية");
    const [page, setPage] = useState("السنة الأولى");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const newData = { title, subtitle, img, category, page };

        const res = await fetch("/api/arabicPoems", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newData),
        });

        if (res.ok) {
            alert("✅ تم إضافة المحتوى بنجاح!");
            setTitle("");
            setSubtitle("");
            setImg("");
            setCategory("كتب مدرسية");
            setPage("السنة الأولى");
        } else {
            alert("❌ حدث خطأ أثناء الإضافة.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6" dir="rtl">
            <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow">
                <h1 className="text-2xl font-bold text-center mb-6 text-black">إضافة محتوى جديد</h1>

                <form onSubmit={handleSubmit} className="space-y-4 text-black">
                    <div>
                        <label className="block mb-1">العنوان</label>
                        <input
                            type="text"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            className="w-full border rounded p-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-1">الوصف</label>
                        <input
                            type="text"
                            value={subtitle}
                            onChange={e => setSubtitle(e.target.value)}
                            className="w-full border rounded p-2"
                        />
                    </div>

                    <div>
                        <label className="block mb-1">رابط الصورة</label>
                        <input
                            type="text"
                            value={img}
                            onChange={e => setImg(e.target.value)}
                            className="w-full border rounded p-2"
                        />
                    </div>

                    <div>
                        <label className="block mb-1">الفئة</label>
                        <select
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                            className="w-full border rounded p-2"
                        >
                            <option value="كتب مدرسية">📘 كتب مدرسية</option>
                            <option value="أناشيد">🎵 أناشيد</option>
                            <option value="محفوظات">📖 محفوظات</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-1">الصفحة (الفئة العمرية)</label>
                        <select
                            value={page}
                            onChange={e => setPage(e.target.value)}
                            className="w-full border rounded p-2"
                        >
                            <option value="السنة الأولى">🟢 السنة الأولى</option>
                            <option value="السنة الثانية">🟢 السنة الثانية</option>
                            <option value="السنة الثالثة">🟢 السنة الثالثة</option>
                            <option value="السنة الرابعة">🟢 السنة الرابعة</option>
                            <option value="السنة الخامسة">🟢 السنة الخامسة</option>
                            <option value="السنة السادسسة">🟢 السنة السادسة</option>
                            <option value="السنة السابعة">🟢 السنة السابعة</option>
                            <option value="السنة الثامنة">🟢 السنة الثامنة</option>
                            <option value="السنة التاسعة">🟢 السنة التاسعة</option>

                        </select>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                    >
                        ➕ إضافة
                    </button>
                </form>
            </div>
        </div>
    );
}
