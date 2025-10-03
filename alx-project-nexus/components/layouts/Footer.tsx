import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BRAND_ICON, MASTERCARD, VISA, PAYPAL } from "@/constants";

const Footer: React.FC = () => {
    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };

    const sections = [
        { title: "Shop", links: ["All Collections", "Winter Edition", "Discount"] },
        { title: "Company", links: ["About Us", "Contact", "Affiliate"] },
        { title: "Support", links: ["FAQ", "Cookies Policy", "Terms of Use"] },
    ];

    return (
        <footer className="bg-gray-100 mt-12">
            <div className="mx-auto max-w-7xl px-4 py-8 flex flex-col gap-6 md:flex-row md:justify-between">
                {/* Logo Container */}
                <div className="flex md:flex-col items-center gap-2 max-w-3/4 md:max-w-[200px]">
                    <Image src={BRAND_ICON} alt="Shop logo" width={80} height={80} />
                    <p className="text-gray-600 text-sm md:ml-12">
                        Your one-stop shop for fashion, discounts, and lifestyle.
                    </p>
                </div>
                {/* Sections (Shop, Company, Support) */}
                {sections.map((item) => (
                    <div key={item.title}>
                        <button onClick={() => toggleSection(item.title)}
                            className="w-full flex justify-between items-center py-2 md:py-0 md:block border-b md:border-none"
                        >
                            <span className="font-semibold">{item.title}</span>
                            <span className="text-lg md:hidden">{openSection === item.title ? '-' : '+'}</span>
                        </button>

                        <ul
                            className={`pl-2 mt-2 space-y-1 text-sm text-gray-600 
                ${openSection === item.title ? "block" : "hidden"} md:block`}
                        >
                            {item.links.map((link, index) => (
                                <li key={`${item.title}-${index}`}>
                                    <Link href='#'>{link}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                <div>
                    <h4 className="font-semibold mb-2">Payment Method</h4>
                    <div className="flex gap-3">
                        <Image src={VISA} alt="Visa" width={40} height={40} />
                        <Image src={MASTERCARD} alt="Mastercard" width={40} height={40} />
                        <Image src={PAYPAL} alt="Paypal" width={40} height={40} />
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-300 py-4 text-center text-sm text-gray-500">
                <p>&copy; 2025{" "} <span
                    className="bg-gradient-to-r from-pink-500 to-orange-600 bg-clip-text text-transparent font-bold"
                >NexuShop</span>. All rights reserved.</p>
            </div>

        </footer>
    );
}

export default Footer;
