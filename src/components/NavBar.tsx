import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import cart from '@/assets/icons/shopping-bag.png';
import profile from '@/assets/icons/user.png';
import messege from '@/assets/icons/envelope.png';
import logo from '@/assets/icons/logo.jpg';
import HeaderSlide from './HeaderSlide';
import { useCart } from "@/context/CartProvider";


const NavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [navbarValue, setNavbarValue] = useState('');
    const [showSubNavbarValue, setShowSubNavbarValue] = useState(false);
    const { toggleCart } = useCart();
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);


    return (
        <nav className="bg-white border-b shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                {/* Top Header */}
                <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between">
                    {/* Logo and Brand Name */}


                    <div className="lg:hidden flex justify-start">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                                />
                            </svg>
                        </button>
                    </div>




                    <div className="w-full flex flex-col items-center md:flex-row md:items-center md:space-x-4 text-center md:text-left">
                        <Link href="/" className="w-36 mx-auto md:mx-0">
                            <Image src={logo} alt="Azalia Logo" className="w-full h-auto" />
                        </Link>
                        <div className="mt-2 md:mt-0">
                            <h1 className="text-2xl md:text-3xl font-semibold">Azalia Mozaffarian Jewelry</h1>
                            <p className="text-md md:text-lg">Dubai</p>
                        </div>
                    </div>

                    {/* Icons and Currency */}
                    <div className="mt-4 md:mt-0 flex justify-center md:justify-end items-center space-x-4">
                        <Link href="/contactus">
                            <Image alt="message" src={messege} />
                        </Link>
                        <button className="w-4 sm:w-7">
                            <Image alt="message" src={profile} />
                        </button>
                        <button onClick={toggleCart} className="w-4 sm:w-8">
                            <Image alt="message" src={cart} />
                        </button>

                        {/* Currency Dropdown */}
                        <div className="relative">
                            <button
                                onClick={toggleDropdown}
                                className="flex items-center text-gray-700 hover:text-gray-900 text-sm"
                            >
                                🌍 AED
                                <svg
                                    className="w-4 h-4 ml-1"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-md z-50">
                                    <ul className="py-1 text-sm">
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">🇦🇪 AED</li>
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">🇺🇸 USD</li>
                                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">🇪🇺 EUR</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className={`
                fixed lg:hidden inset-0 z-50 bg-white p-6 overflow-y-auto flex flex-col gap-4 max-w-[450px] text-sm sm:text-base
                transform transition-all duration-500 ease-in-out
                ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 pointer-events-none'}
            `}>
                    <div className="flex justify-start">
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-2xl font-bold"
                        >
                            ✕
                        </button>
                    </div>
                    {!mobileSubmenu && (
                        <nav className="flex flex-col gap-4 mt-6">
                            {[
                                { label: 'Engagement Rings', value: 'engagement_rings' },
                                { label: 'Jewellery', value: 'jewellery' },
                                { label: 'Gemstones', value: 'gemstones' },
                                { label: 'Diamonds', value: 'diamonds' },
                                { label: 'Contact Us', value: 'contact_us' },
                            ].map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => setMobileSubmenu(item.value)}
                                    className="text-left text-sm sm:text-base md:text-lg font-medium text-gray-800 hover:text-blue-600"

                                >
                                    {item.label}
                                </button>
                            ))}
                        </nav>
                    )}

                   {mobileSubmenu && (
  <>
    <div className="mt-4">
      <button
        onClick={() => setMobileSubmenu(null)}
        className="text-sm text-gray-500 hover:text-gray-800"
      >
        ← Back
      </button>
    </div>
    <div className="lg:mt-6">
      <HeaderSlide navbarValue={mobileSubmenu} closeMenu={() => setIsMobileMenuOpen(false)} />
    </div>
  </>
)}

                </div>



                {/* Navigation Menu */}
                <div
                    onMouseEnter={() => setShowSubNavbarValue(true)}
                    onMouseLeave={() => setShowSubNavbarValue(false)}
                    className="mt-6"
                >
                    <ul className="hidden lg:flex flex-wrap justify-center space-x-3 md:space-x-6 text-base md:text-xl font-medium">

                        <li onMouseEnter={() => setNavbarValue('engagement_rings')}>
                            <Link href="/recentlymaderings" className="hover:text-blue-600 transition">
                                Engagement Rings
                            </Link>
                        </li>
                        <li onMouseEnter={() => setNavbarValue('jewellery')}>
                            <Link href="/recentlymaderings" className="hover:text-blue-600 transition">
                                Jewellery
                            </Link>
                        </li>
                        <li onMouseEnter={() => setNavbarValue('gemstones')}>
                            <Link href="/recentlymaderings" className="hover:text-blue-600 transition">
                                Gemstones
                            </Link>
                        </li>
                        <li onMouseEnter={() => setNavbarValue('diamonds')}>
                            <Link href="/ringdesign" className="hover:text-blue-600 transition">
                                Diamonds
                            </Link>
                        </li>
                        <li onMouseEnter={() => setNavbarValue('contact_us')}>
                            <Link href="#" className="hover:text-blue-600 transition">
                                Contact Us
                            </Link>
                        </li>
                    </ul>

                    {/* Submenu Slide */}
                    <div
                        className={`transition-all duration-300 ease-in-out absolute lg:mt-10 top-[180px] left-0 w-full bg-white z-40  ${showSubNavbarValue ? 'opacity-100 visible ' : ' opacity-0 invisible'
                            }`}
                    >
                        <HeaderSlide navbarValue={navbarValue} />
                    </div>
                </div>
            </div>
        </nav>
    );
}; ``

export default NavBar;
