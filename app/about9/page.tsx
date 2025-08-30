'use client';
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Card = {
    _id: string;
    title: string;
    subtitle: string;
    img: string;
    category: string;
    page: string;
};

export default function Grade1Page() {
    const [cards, setCards] = useState<Card[]>([]);
    const [activeCategory, setActiveCategory] = useState("");
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        fetch("/api/arabicPoems")
            .then(res => res.json())
            .then((data: Card[]) => {
                const filtered = data.filter(c => c.page === "السنة الثالثة");
                setCards(filtered);

                const cats = Array.from(new Set(filtered.map(c => c.category)));
                setCategories(cats);
                if (cats.length > 0) setActiveCategory(cats[0]);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-6" dir="rtl">
            <header className="max-w-6xl mx-auto mb-6">
                <div className="bg-white shadow-md rounded-md p-6 text-center">
                    <h1 className="text-2xl md:text-3xl font-semibold text-blue-800">
                        محفوظات و أناشيد السنة  الثامنية أساسي
                    </h1>
                </div>
            </header>

            <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Sidebar الفئات */}
                <aside className="col-span-1 space-y-4">
                    <div className="bg-white rounded-lg shadow p-4">
                        <h2 className="text-lg font-medium text-gray-700">الفئات</h2>
                        <ul className="mt-3 space-y-2 text-blue-700">
                            {categories.map(cat => (
                                <li
                                    key={cat}
                                    className={`cursor-pointer hover:underline ${activeCategory === cat ? "font-bold text-blue-900" : ""}`}
                                    onClick={() => setActiveCategory(cat)}
                                >
                                    {cat}
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                {/* Gallery */}
                <section className="col-span-1 lg:col-span-3">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {cards
                            .filter(c => c.category === activeCategory)
                            .map((card, idx) => (
                                <motion.article
                                    key={card._id}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.08 }}
                                    className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
                                >
                                    <div className="p-4 flex-1 flex flex-col">
                                        <div className="flex-1">
                                            <div className="border rounded-md overflow-hidden bg-gray-50">
                                                <img src={card.img} alt={card.title} className="w-full h-56 object-contain bg-white p-4"/>
                                            </div>
                                        </div>
                                        <div className="mt-4 text-center">
                                            <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
                                            <p className="text-sm text-gray-500 mt-1">{card.subtitle}</p>
                                        </div>
                                    </div>
                                    <div className="p-4 border-t bg-gray-50 flex gap-3 justify-center">
                                        <button className="px-4 py-2 rounded-md bg-blue-600 text-white shadow-sm">تحميل</button>
                                        <button className="px-4 py-2 rounded-md bg-white border text-gray-700">أقرأ!</button>
                                    </div>
                                </motion.article>
                            ))}
                    </div>
                </section>
            </main>
        </div>
    );
}
