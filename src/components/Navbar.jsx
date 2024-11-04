import React, { useEffect, useState } from 'react';
import { LogoLight } from '../assets/img';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const e = window.pageYOffset;
            const mainNavBar = document.getElementById("mainnavigationBar");
            const topNav = document.getElementById("top-nav");

            if (e >= 100) {
                mainNavBar.classList.add("nav-sticky");
                if (topNav) {
                    topNav.classList.add("scale-y-0", "origin-top");
                    topNav.classList.remove("scale-y-100");
                }
            } else {
                mainNavBar.classList.remove("nav-sticky");
                if (topNav) {
                    topNav.classList.remove("scale-y-0", "origin-top");
                    topNav.classList.add("scale-y-100", "origin-top");
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const getLinkClass = (path) => {
        const baseClass = "font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-white hover:border-borderColour dark:hover:bg-dark-200 dark:hover:border-borderColour/10 duration-500 hover:duration-500 transition-colors";
        const isActive = location.pathname === path;
        return isActive ? `${baseClass} active bg-white border-borderColour dark:bg-dark-200 dark:border-borderColour/10` : baseClass;
    };

    return (
        <header
            className="fixed left-0 top-15 z-[1000000000] duration-500 transition-all w-full bg-transparent"
            id="mainnavigationBar"
        >
            <nav className="container flex relative items-center">
                <div className="nav-logo">
                    <Link to="/">
                        <img
                            src={LogoLight}
                            alt="logo"
                            className="dark:hidden"
                            style={{ width: '100px' }}
                        />
                        <img
                            src={LogoLight}
                            alt="logo dark version"
                            className="hidden dark:inline-block"
                        />
                    </Link>
                </div>
                <ul className="nav-list hidden lg:flex lg:ml-7 xl:ml-15 [&>*:not(:last-child)]:me-1">
                    <li>
                        <Link
                            to="/"
                            className={getLinkClass('/')}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className={getLinkClass('/about')}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/services"
                            className={getLinkClass('/services')}
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/riders"
                            className={getLinkClass('/riders')}
                        >
                            Riders
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className={getLinkClass('/contact')}
                        >
                            Contact Us
                        </Link>
                    </li>
                </ul>
                <ul className="flex items-center ml-auto [&>*:not(:last-child)]:me-2.5">
                    <li className="max-lg:hidden">
                        <Link
                            to="/request-demo"
                            className={`btn btn-navbar btn-sm ${location.pathname === '/request-demo' ? 'active' : ''}`}
                        >
                            Request Demo
                        </Link>
                    </li>
                    <li className="max-lg:inline-block lg:hidden">
                        <button 
                            className="outline-none mobile-menu-button w-10 h-10 rounded-full bg-white dark:bg-dark-200 relative"
                            onClick={toggleMobileMenu}
                        >
                            <Menu className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </button>
                    </li>
                </ul>
                <div className={`mobile-menu max-lg:overflow-y-auto ${isMobileMenuOpen ? 'open' : 'hidden'}`}>
                    <button
                        className="outline-none navbar-toggle-close w-10 h-10 rounded-full bg-white dark:bg-dark-200 absolute right-6 top-5"
                        onClick={toggleMobileMenu}
                    >
                        <i className="fa-solid fa-times"></i>
                    </button>
                    <ul className="nav-list flex flex-col gap-5 w-full max-w-[500px] landscape:h-full">
                        <li>
                            <Link
                                to="/"
                                className={getLinkClass('/')}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className={getLinkClass('/about')}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/services"
                                className={getLinkClass('/services')}
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className={getLinkClass('/contact')}
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
