import React from 'react'
import { LogoLight } from '../assets/img'

const Navbar = () => {
    return (
        <header
            className="fixed left-0 top-15 z-[1000000000] duration-500  transition-all w-full bg-transparent"
            id="mainnavigationBar"
        >
            <nav className="container flex relative items-center">
                <div className="nav-logo">
                    <a href="/">
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
                    </a>
                </div>
                <ul className="nav-list hidden lg:flex lg:ml-7 xl:ml-15  [&>*:not(:last-child)]:me-1">
                    <li>
                        <a
                            href="/"
                            className="font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-white hover:border-borderColour dark:hover:bg-dark-200 
                            dark:hover:border-borderColour/10 duration-500 hover:duration-500 transition-colors "
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="/about"
                            className="font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-white hover:border-borderColour dark:hover:bg-dark-200 
                            dark:hover:border-borderColour/10 duration-500 hover:duration-500 transition-colors "
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="/services"
                            className="font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-white hover:border-borderColour dark:hover:bg-dark-200 
                            dark:hover:border-borderColour/10 duration-500 hover:duration-500 transition-colors "
                        >
                            Services
                        </a>
                    </li>
                    <li>
                        <a
                            href="/contact"
                            className="font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-white hover:border-borderColour dark:hover:bg-dark-200 
                            dark:hover:border-borderColour/10 duration-500 hover:duration-500 transition-colors  "
                        >
                            Contact Us
                        </a>
                    </li>
                </ul>
                <ul className="flex items-center ml-auto  [&>*:not(:last-child)]:me-2.5">
                    <li className="">
                        <button
                            className="bg-white dark:bg-dark-200 p-2.5 rounded-full "
                            id="open-btn"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M9.11278 0C14.1369 0 18.2245 4.08758 18.2245 9.11278C18.2245 11.2861 17.4592 13.5472 16.1845 14.8512L20 18.6667L18.6667 20L14.8512 16.1856C13.5667 17.4603 11.2861 18.2245 9.11278 18.2245C4.08758 18.2245 0 14.1369 0 9.11278C0 4.08758 4.08758 0 9.11278 0ZM9.11278 16.3395C13.0974 16.3395 16.3395 13.0974 16.3395 9.11278C16.3395 5.12818 13.0974 1.88608 9.11278 1.88608C5.12709 1.88608 1.88499 5.12818 1.88499 9.11278C1.88499 13.0974 5.12709 16.3395 9.11278 16.3395Z"
                                    fill=""
                                    className="fill-paragraph dark:fill-white"
                                />
                            </svg>
                        </button>
                    </li>
                    <li className="max-lg:hidden">
                        <a
                            href="request-demo"
                            className="btn btn-navbar btn-sm"
                        >
                            Request Demo
                        </a>
                    </li>
                    <li className="max-lg:inline-block lg:hidden ">
                        <button className="outline-none mobile-menu-button w-10 h-10 rounded-full bg-white dark:bg-dark-200 relative ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="14"
                                viewBox="0 0 22 14"
                                fill="none"
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            >
                                <path
                                    d="M0 1C0 0.447715 0.447715 0 1 0H21C21.5523 0 22 0.447715 22 1C22 1.55228 21.5523 2 21 2H1C0.447716 2 0 1.55228 0 1Z"
                                    fill=""
                                    className="fill-paragraph dark:fill-white"
                                />
                                <path
                                    d="M8 7C8 6.44772 8.44772 6 9 6H21C21.5523 6 22 6.44772 22 7C22 7.55228 21.5523 8 21 8H9C8.44772 8 8 7.55228 8 7Z"
                                    fill=""
                                    className="fill-paragraph dark:fill-white"
                                />
                                <path
                                    d="M4 13C4 12.4477 4.44772 12 5 12H21C21.5523 12 22 12.4477 22 13C22 13.5523 21.5523 14 21 14H5C4.44772 14 4 13.5523 4 13Z"
                                    fill=""
                                    className="fill-paragraph dark:fill-white"
                                />
                            </svg>
                        </button>
                    </li>
                </ul>
                <div className="mobile-menu max-lg:overflow-y-auto">
                    <button
                        className=" outline-none navbar-toggle-close  w-10 h-10 rounded-full bg-white dark:bg-dark-200 absolute right-6 top-5 "
                    >
                        <i className="fa-solid fa-times"></i>
                    </button>
                    <ul className="nav-list flex flex-col gap-5 w-full max-w-[500px] landscape:h-full">
                        <li>
                            <a
                                href="/"
                                className="font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-white hover:border-borderColour dark:hover:bg-dark-200 
                                dark:hover:border-borderColour/10 duration-500 hover:duration-500 transition-colors "
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="/about"
                                className="font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-white hover:border-borderColour dark:hover:bg-dark-200 
                                dark:hover:border-borderColour/10 duration-500 hover:duration-500 transition-colors "
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="/services"
                                className="font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-white hover:border-borderColour dark:hover:bg-dark-200 
                                dark:hover:border-borderColour/10 duration-500 hover:duration-500 transition-colors "
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="/contact" className="font-Inter flex items-center text-base font-medium leading-8 text-paragraph dark:text-white py-[5px] px-5 lg:px-4 xl:px-5 border rounded-large border-transparent hover:bg-white hover:border-borderColour dark:hover:bg-dark-200 dark:hover:border-borderColour/10 duration-500 hover:duration-500 transition-colors"
                            >
                                Contact Us
                            </a>
                        </li>

                        <li>
                            <a
                                href="/request-demo"
                                className="btn btn-navbar btn-sm"
                            >
                                Request Demo
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar