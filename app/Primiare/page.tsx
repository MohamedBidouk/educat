'use client'

import Link from 'next/link';

export default function Home() {
    const buttons = [
        { text: "Page 1", href: "/page1" },
        { text: "Page 2", href: "/page2" },
        { text: "Page 3", href: "/page3" },
        { text: "Page 4", href: "/page4" },
        { text: "Page 5", href: "/page5" },
        { text: "Page 6", href: "/page6" },
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-gray-100">
            {buttons.map((btn, idx) => (
                <Link key={idx} href={btn.href}>
                    <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">
                        {btn.text}
                    </button>
                </Link>
            ))}
        </div>
    );
}
