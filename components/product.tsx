'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ArabicPoemsGallery() {
    const allCards = {
        "كتب مدرسية": [
            { title: "محفوظات شرف العمل", subtitle: "محفوظات شرف العمل", img: "https://via.placeholder.com/300x200?text=شرف+العمل" },
            { title: "محفوظات نشيد السلام", subtitle: "محفوظات نشيد السلام", img: "https://via.placeholder.com/300x200?text=نشيد+السلام" },
        ],
        "كتب موازية ومراجعة": [
            { title: "محفوظات هكذا نبني الوطن", subtitle: "محفوظات هكذا نبني الوطن", img: "https://via.placeholder.com/300x200?text=نبني+الوطن" },
            { title: "محفوظات العلم والعمل", subtitle: "محفوظات العلم والعمل", img: "https://via.placeholder.com/300x200?text=العلم+والعمل" },
        ],
        "قصص للمطالعة": [
            { title: "قصة الصديق الوفي", subtitle: "قصة قصيرة", img: "https://via.placeholder.com/300x200?text=الصديق+الوفي" },
        ],
        "موسوعات علمية": [
            { title: "موسوعة الفضاء", subtitle: "معلومات عن الكون", img: "https://via.placeholder.com/300x200?text=الفضاء" },
        ],
        "فضاء المعلم": [
            { title: "دليل المعلم 1", subtitle: "إرشادات للدرس", img: "https://via.placeholder.com/300x200?text=دليل+المعلم+1" },
            { title: "دليل المعلم 2", subtitle: "تمارين وأنشطة", img: "https://via.placeholder.com/300x200?text=دليل+المعلم+2" },
        ],
    };

    const categories = Object.keys(allCards).filter(cat => cat !== "فضاء المعلم");

    const [activeCategory, setActiveCategory] = useState("كتب مدرسية");
    const [isBooksOpen, setIsBooksOpen] = useState(true);
    const [isTeacherSpaceOpen, setIsTeacherSpaceOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100 p-6" dir="rtl">
            {/* Header */}
            <header className="max-w-6xl mx-auto mb-6">
                <div className="bg-white shadow-md rounded-md p-6 text-center">
                    <h1 className="text-2xl md:text-3xl font-semibold text-blue-800">
                        محفوظات و أناشيد سنة ثانية ابتدائي
                    </h1>
                </div>
            </header>

            {/* Main */}
            <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Sidebar */}
                <aside className="col-span-1 space-y-4">
                    {/* كتب كاملة */}
                    <div className="bg-white rounded-lg shadow p-4">
                        <h2
                            className="text-lg font-medium text-gray-700 cursor-pointer flex justify-between items-center"
                            onClick={() => setIsBooksOpen(!isBooksOpen)}
                        >
                            كتب كاملة ▾ <span>{isBooksOpen ? "▲" : "▼"}</span>
                        </h2>
                        {isBooksOpen && (
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
                        )}
                    </div>

                    {/* فضاء المعلم */}
                    <div className="bg-white rounded-lg shadow p-4">
                        <h2
                            className="text-lg font-medium text-gray-700 cursor-pointer flex justify-between items-center"
                            onClick={() => setIsTeacherSpaceOpen(!isTeacherSpaceOpen)}
                        >
                            فضاء المعلم ▾ <span>{isTeacherSpaceOpen ? "▲" : "▼"}</span>
                        </h2>
                        {isTeacherSpaceOpen && (
                            <ul className="mt-3 space-y-2 text-blue-700">
                                {allCards["فضاء المعلم"].map(card => (
                                    <li
                                        key={card.title}
                                        className={`cursor-pointer hover:underline ${activeCategory === card.title ? "font-bold text-blue-900" : ""}`}
                                        onClick={() => setActiveCategory(card.title)}
                                    >
                                        {card.title}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </aside>

                {/* Gallery */}
                <section className="col-span-1 lg:col-span-3">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {(allCards[activeCategory] || []).map((card, idx) => (
                            <motion.article
                                key={card.title}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.08 }}
                                className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
                            >
                                <div className="p-4 flex-1 flex flex-col">
                                    <div className="flex-1">
                                        <div className="border rounded-md overflow-hidden bg-gray-50">
                                            <img
                                                src={card.img}
                                                alt={card.title}
                                                className="w-full h-56 object-contain bg-white p-4"
                                            />
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

            {/* Footer */}
            <footer className="max-w-6xl mx-auto mt-8 text-center text-sm text-gray-500">
                واجهة عرض نمطية — عدل المحتوى أو استبدل الصور حسب الحاجة
            </footer>
        </div>
    );
}
