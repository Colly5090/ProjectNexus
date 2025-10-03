import { Bars3Icon, ShoppingCartIcon, UserIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { BRAND_ICON } from "@/constants";
import { SearchProp } from "@/interfaces";
import { useState, useMemo, useEffect } from "react";
import debounce from "lodash.debounce";
import type { DebouncedFunc } from "lodash";
import InstallInstructions from "@/components/pwa/InstallInstructions";
import Modal from "@/components/pwa/Modal";

const Header: React.FC<SearchProp> = ({ onSearch }) => {
    const [query, setQuery] = useState("");
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [isInstallOpen, setInstallOpen] = useState(false);

    // ✅ Debounced Search (Desktop only)
    const debouncedSearch: DebouncedFunc<(value: string) => void> = useMemo(
        () =>
            debounce((value: string) => {
                onSearch?.(value);
            }, 500),
        [onSearch]
    );

    useEffect(() => {
        return () => debouncedSearch.cancel();
    }, [debouncedSearch]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);

        if (window.innerWidth >= 768) {
            debouncedSearch(value);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onSearch?.(query);
        }
    };

    const toggleMobileMenu = () => setShowMobileMenu((prev) => !prev);

    return (
        <header className="w-full border-b border-gray-400 shadow-md px-4 py-2">
            <div className="mx-auto flex max-w-7xl items-center justify-between">

                {/* Left: Logo */}
                <div className="flex-1">
                    <Link href="/">
                        <Image src={BRAND_ICON} alt="Shop logo" width={120} height={120} />
                    </Link>
                </div>

                {/* Center: Desktop Nav */}
                <nav className="hidden flex-1 justify-center gap-8 md:flex md:justify-between md:gap-4">
                    <Link href="/categories/catalog" className="hover:text-gray-600">Catalog</Link>
                    <Link href="/products/most-wanted" className="hover:text-gray-600">Most Wanted</Link>
                    <Link href="/products/new-arrival" className="hover:text-gray-600">New Arrival</Link>
                    <Link href="/products/brands" className="hover:text-gray-600">Brands</Link>
                    <button onClick={() => setInstallOpen(true)} className="hover:text-gray-600 text-green-700">Install App</button>
                </nav>

                {/* Right: Search + Icons */}
                <div className="flex basis-4/5 md:flex-1 items-center justify-between md:justify-end gap-4">
                    {/* Search */}
                    <div className="flex-1 flex items-center gap-2 border rounded-md px-2 py-1 md:flex-none md:w-auto">
                        <MagnifyingGlassIcon className="h-6 w-6 md:h-5 md:w-5 text-gray-500" />
                        <input
                            type="text"
                            value={query}
                            onChange={handleSearch}
                            onKeyDown={handleKeyDown}
                            placeholder="Search..."
                            className="w-full focus:outline-none md:w-48"
                        />
                    </div>

                    {/* Desktop Cart + User */}
                    <ShoppingCartIcon className="hidden h-6 w-6 text-gray-700 md:block" />
                    <UserIcon className="hidden h-6 w-6 text-gray-700 md:block" />

                    {/* Hamburger (mobile only) */}
                    <button className="md:hidden" onClick={toggleMobileMenu}>
                        <Bars3Icon className="h-7 w-7 text-gray-700" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {showMobileMenu && (
                <div className="md:hidden mt-2 flex flex-col gap-2 px-4 pb-4 border-t border-gray-300">
                    <Link href="/categories/catalog" className="hover:text-gray-600" onClick={() => setShowMobileMenu(false)}>Catalog</Link>
                    <Link href="/products/most-wanted" className="hover:text-gray-600" onClick={() => setShowMobileMenu(false)}>Most Wanted</Link>
                    <Link href="/products/new-arrival" className="hover:text-gray-600" onClick={() => setShowMobileMenu(false)}>New Arrival</Link>
                    <Link href="/products/brands" className="hover:text-gray-600" onClick={() => setShowMobileMenu(false)}>Brands</Link>

                    <div className="flex gap-4 mt-2">
                        <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
                        <UserIcon className="h-6 w-6 text-gray-700" />
                        <button onClick={() => { setInstallOpen(true); setShowMobileMenu(true); }} className="hover:text-gray-600 text-green-700">Install App</button>
                    </div>
                </div>
            )}

            <Modal isOpen={isInstallOpen} onClose={() => setInstallOpen(false)}>
                <InstallInstructions />
            </Modal>
        </header>
    );
};

export default Header;
