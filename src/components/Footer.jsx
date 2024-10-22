import React from 'react'
import { LogoLight } from '../assets/img'
import { Link } from 'react-router-dom'
import { Instagram, Twitter } from 'lucide-react'

const Footer = () => {
    return (
        <section className="bg-white dark:bg-dark-300 overflow-hidden relative pt-20">
            <div className="container">
                <div className="grid grid-cols-12 mb-20 max-lg:gap-y-10 max-lg:text-center">
                    <div className="col-span-12 lg:col-span-6">
                        <img
                            src={LogoLight}
                            alt="logo"
                            className="inline-block dark:hidden mb-10"
                            style={{ width: '100px' }}
                        />
                        <img
                            src={LogoLight}
                            alt="logo dark version"
                            className="hidden dark:inline-block  mb-10"
                            style={{ width: '100px' }}
                        />
                        <p className="max-w-[350px] max-lg:mx-auto">
                            Turpis tortor nunc sed amet et faucibus vitae morbi congue sed id mauris.
                        </p>
                    </div>
                    <div className="col-span-12 lg:col-span-2 max-lg:text-center">
                        <h3 className="mb-8 font-medium text-lg">Explore</h3>
                        <ul className="[&>*:not(:last-child)]:mb-3">
                            <li>
                                <Link
                                    to="/about"
                                    className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white  before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/services"
                                    className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white  before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to=""
                                    className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white  before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
                                >
                                    Faq's
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-12 lg:col-span-2 max-lg:text-center">
                        <h3 className="mb-8 font-medium text-lg">Resources</h3>
                        <ul className="[&>*:not(:last-child)]:mb-3">
                            <li>
                                <Link
                                    to="team.html"
                                    className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white  before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
                                >
                                    Team
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-12 lg:col-span-2 max-lg:text-center">
                        <h3 className="mb-8 font-medium text-lg">Get In touch</h3>
                        <p className="mb-3">Need Support?</p>
                        <p className="mb-3">
                            <Link
                                to="mailto:peleke@info.rw"
                                className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white  before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
                            >
                                peleke@info.rw
                            </Link>
                        </p>

                        <p className="mb-3">
                            <Link
                                to="tel:+250788888888"
                                className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white  before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
                            >
                                +250 788 888 888
                            </Link>
                        </p>
                        <ul className="flex items-center max-lg:justify-center social-link gap-4">
                            <li>
                                <Link
                                    to="#"
                                    className="transiton-all"
                                >
                                    <Instagram />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="#"
                                    className="transiton-all"
                                >
                                    <Twitter />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="seperator">
                    <img
                        src="https://aplio.vercel.app/images/footer-seperator.svg"
                        alt="footer-seperator"
                        className="dark:hidden w-full object-cover"
                    />
                </div>

                <div className="py-10 max-lg:text-center">
                    <div className="flex max-lg:flex-col lg:items-center">
                        <p className="max-lg:mb-10">@ <span id="date"></span> Peleka. All Rights Reserved</p>
                        <ul className="lg:ml-auto flex items-center gap-15  max-lg:justify-center">
                            <li>
                                <Link
                                    to="#"
                                    className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white  before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="#"
                                    className="relative inline-block overflow-hidden text-base capitalize text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white  before:transition-transform before:duration-500 before:content-[''] before:hover:origin-left before:hover:scale-x-100"
                                >
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer