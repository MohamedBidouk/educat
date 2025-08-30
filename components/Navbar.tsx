'use client';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
    const [isPrimaryDropdownOpen, setIsPrimaryDropdownOpen] = useState(false);
    const [isSecondaryDropdownOpen, setIsSecondaryDropdownOpen] = useState(false);
    const [isPrimaryMobileMenuOpen, setIsPrimaryMobileMenuOpen] = useState(false);
    const [lang, setLang] = useState<'ar' | 'en'>('ar');

    const primaryRef = useRef<HTMLDivElement>(null);
    const secondaryRef = useRef<HTMLDivElement>(null);

    // Load language from localStorage
    useEffect(() => {
        const savedLang = localStorage.getItem("lang");
        if (savedLang === "en" || savedLang === "ar") {
            setLang(savedLang);
        }
    }, []);

    // Save language to localStorage
    useEffect(() => {
        localStorage.setItem("lang", lang);
    }, [lang]);

    // Close dropdowns on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                primaryRef.current &&
                !primaryRef.current.contains(event.target as Node) &&
                secondaryRef.current &&
                !secondaryRef.current.contains(event.target as Node)
            ) {
                setIsPrimaryDropdownOpen(false);
                setIsSecondaryDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const texts = {
        ar: {
            home: 'الرئيسية',
            about: 'أبتدائي',
            about1: 'سنة أولى',
            about2: 'سنة ثانية',
            about3: 'سنة ثالثة',
            about4: 'سنة رابعة',
            about5: 'سنة خامسة',
            about6: 'سنة سادسة',
            about7: 'ثانوي',
            about8: 'سنة سابعة',
            about9: 'سنة ثامنة',
            about10: 'سنة تاسعة',
            switch: 'FR',
            site: 'أوديكا',
            dir: 'rtl',
        },
        en: {
            home: 'Home',
            about: 'Primiare',
            about1: 'Première année',
            about2: 'Deuxième année',
            about3: 'Troisième année',
            about4: 'Quatrième année',
            about5: 'Cinquième année',
            about6: 'Sixième année',
            about7: 'Préparatoire',
            about8: 'Septième année',
            about9: 'Huitième année',
            about10: 'Neuvième année',
            switch: 'العربية',
            site: 'Educt',
            dir: 'ltr',
        },
    };

    const t = texts[lang];

    return (
        <nav className="bg-gray-800" dir={t.dir}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center text-white">
                        <Link href="/" className="text-xl font-bold">{t.site}</Link>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:block">
                        <div className={`ml-10 flex items-baseline gap-x-4 ${lang === 'ar' ? 'space-x-reverse' : ''}`}>
                            <Link href="/" className="hover:bg-gray-700 px-3 py-2 rounded-md text-xl font-high text-white">{t.home}</Link>

                            {/* أبتدائي */}
                            <div className="relative" ref={primaryRef}>
                                <button
                                    onClick={() => {
                                        setIsPrimaryDropdownOpen(!isPrimaryDropdownOpen);
                                        setIsSecondaryDropdownOpen(false);
                                    }}
                                    className="hover:bg-gray-700 px-3 py-2 rounded-md text-xl font-high text-white"
                                >
                                    {t.about}
                                </button>

                                {isPrimaryDropdownOpen && (
                                    <div className={`absolute top-full ${lang === 'ar' ? 'right-0' : 'left-0'} mt-2 w-40 bg-white rounded-lg shadow-lg z-50`}>
                                        <Link href="/about1" onClick={() => setIsPrimaryDropdownOpen(false)} className="block px-4 py-2 text-gray-900 font-semibold hover:bg-gray-700 hover:text-white">{t.about1}</Link>
                                        <Link href="/about2" onClick={() => setIsPrimaryDropdownOpen(false)} className="block px-4 py-2 text-gray-900 font-semibold hover:bg-gray-700 hover:text-white">{t.about2}</Link>
                                        <Link href="/about3" onClick={() => setIsPrimaryDropdownOpen(false)} className="block px-4 py-2 text-gray-900 font-semibold hover:bg-gray-700 hover:text-white">{t.about3}</Link>
                                        <Link href="/about4" onClick={() => setIsPrimaryDropdownOpen(false)} className="block px-4 py-2 text-gray-900 font-semibold hover:bg-gray-700 hover:text-white">{t.about4}</Link>
                                        <Link href="/about5" onClick={() => setIsPrimaryDropdownOpen(false)} className="block px-4 py-2 text-gray-900 font-semibold hover:bg-gray-700 hover:text-white">{t.about5}</Link>
                                        <Link href="/about6" onClick={() => setIsPrimaryDropdownOpen(false)} className="block px-4 py-2 text-gray-900 font-semibold hover:bg-gray-700 hover:text-white">{t.about6}</Link>
                                    </div>
                                )}
                            </div>

                            {/* ثانوي */}
                            <div className="relative" ref={secondaryRef}>
                                <button
                                    onClick={() => {
                                        setIsSecondaryDropdownOpen(!isSecondaryDropdownOpen);
                                        setIsPrimaryDropdownOpen(false);
                                    }}
                                    className="hover:bg-gray-700 px-3 py-2 rounded-md text-xl font-high text-white"
                                >
                                    {t.about7}
                                </button>

                                {isSecondaryDropdownOpen && (
                                    <div className={`absolute top-full ${lang === 'ar' ? 'right-0' : 'left-0'} mt-2 w-40 bg-white rounded-lg shadow-lg z-50`}>
                                        <Link href="/about8" onClick={() => setIsSecondaryDropdownOpen(false)} className="block px-4 py-2 text-gray-900 font-semibold hover:bg-gray-700 hover:text-white">{t.about8}</Link>
                                        <Link href="/about9" onClick={() => setIsSecondaryDropdownOpen(false)} className="block px-4 py-2 text-gray-900 font-semibold hover:bg-gray-700 hover:text-white">{t.about9}</Link>
                                        <Link href="/about10" onClick={() => setIsSecondaryDropdownOpen(false)} className="block px-4 py-2 text-gray-900 font-semibold hover:bg-gray-700 hover:text-white">{t.about10}</Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Language Switch */}
                    <button
                        onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
                        className="bg-gray-600 hover:bg-gray-500 px-3 py-1 rounded-md text-sm mr-2 text-white"
                    >
                        {t.switch}
                    </button>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden text-white">
                        <button
                            onClick={() => setIsPrimaryMobileMenuOpen(!isPrimaryMobileMenuOpen)}
                            className="hover:text-white focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isPrimaryMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Links */}
            {isPrimaryMobileMenuOpen && (
                <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3 text-white">
                    <Link href="/" className="block hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">
                        {t.home}
                    </Link>
                    <div>
                        <span className="block px-3 py-2 text-base font-medium">{t.about}</span>
                        <div className="pl-4 space-y-1">
                            <Link href="/about1" className="block hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">
                                {t.about1}
                            </Link>
                            <Link href="/about2" className="block hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">
                                {t.about2}
                            </Link>
                            <Link href="/about3" className="block hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">
                                {t.about3}
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
