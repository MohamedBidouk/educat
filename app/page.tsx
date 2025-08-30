'use client'

import Image from "next/image";
import Link from 'next/link';
import  Primiare from "@/components/Primiare";

export default function Home() {
    return (
        <div className="bg-white min-h-screen relative">

            {/* البلوك الترحيبي */}
            <div className="absolute top-10 right-[90px] left-[70px] flex flex-row-reverse items-center p-8 bg-[#f0f6ff] border border-white rounded-lg shadow-2xl">
                {/* الصورة الترحيبية */}
                <div className="w-[280px] h-[320px] relative">
                    <Image
                        src="/home.png"
                        alt="صورة ترحيبية"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>

                {/* النص */}
                <div className="text-right max-w-md">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">
                        مرحباً بكم في منصة <span className="text-blue-600">أوديكا التونسية</span>
                    </h1>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        موقع يدمج كلّ اصناف ، بحوث كتب مدرسية ومحفوظات و قصص للمطالعة
                    </p>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                        ابدأ الآن
                    </button>
                </div>
            </div>

            {/* level */}
            <div className="h-[500px]"></div>

            {/* First clickable image */}
            <div className="flex justify-end pr-120">
                <div className="text-right flex flex-col items-center">
                    <Link href="/Primiare">
                        <Image
                            src="/first1.png"
                            alt="Clickable"
                            width={200}
                            height={20}
                            style={{ cursor: 'pointer' }}
                            className="bg-[#f0f6ff] border border-white rounded-lg shadow-2xl
                    transform transition-transform duration-300 hover:scale-105"

                        />
                    </Link>
                </div>
            </div>

            {/* Second clickable image */}
            <div className="flex justify-end pr-200 -mt-50">
                <div className="text-right flex flex-col items-center pb-40">
                    <Link href="...">
                        <Image
                            src="/second1.png"
                            alt="Clickable"
                            width={200}
                            height={20}
                            style={{ cursor: 'pointer' }}
                            className="bg-[#f0f6ff] border border-white rounded-lg shadow-2xl
                   transform transition-transform duration-300 hover:scale-105"
                        />
                    </Link>
                </div>
            </div>

        </div>
    )
}
