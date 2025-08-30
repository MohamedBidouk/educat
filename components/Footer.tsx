// components/Footer.tsx
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Brand / About */}
                <div className="text-right">
                    <h2 className="text-xl font-semibold text-white mb-4">:مواقعنا</h2>
                    <p className="text-sm">
                        educt.com
                    </p>
                </div>

                {/* Quick Links */}
                <div className="text-right">
                    <h2 className="text-xl font-semibold text-white mb-4">:روابط سريعة</h2>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/" className="hover:text-white">الرئيسية</Link>
                        </li>
                    </ul>
                </div>

                {/* Social Media */}
                <div className="text-right">
                    <h2 className="text-xl font-semibold text-white mb-4">:تابعنا</h2>
                    <div className="flex justify-end gap-x-4">
                        <Link href="https://facebook.com" target="_blank" className="hover:text-white">
                            <FaFacebook size={24} />
                        </Link>
                        <Link href="https://twitter.com" target="_blank" className="hover:text-white">
                            <FaTwitter size={24} />
                        </Link>
                        <Link href="https://instagram.com" target="_blank" className="hover:text-white">
                            <FaInstagram size={24} />
                        </Link>
                    </div>
                </div>

            </div>

            {/* Bottom line */}
            <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
                © {new Date().getFullYear()} MyWebsite. All rights reserved.
            </div>
        </footer>
    );
}
