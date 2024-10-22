import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
    return (
        <>
            <section className="hero overflow-hidden relative max-lg:pt-150 pt-[240px] pb-[60px] z-40">
                <div className="container">
                    <div
                        className="max-w-[948px] mx-auto text-center"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-duration="1000"
                        data-aos-once="true"
                    >
                        <p className="mb-4 font-medium uppercase">Our Services</p>
                        <h1 className="max-lg:mb-10 mb-10">Trusted Delivery Solutions for Kigali’s People</h1>
                        <p className="max-lg:mb-10 mb-12 max-w-[590px] mx-auto">
                            At Peleka, we provide fast, reliable, and secure delivery services tailored to your business needs. From food to retail, our motorbike couriers ensure your products reach your clients safely and on time. Let us handle your logistics so you can focus on growing your business.
                        </p>
                    </div>
                </div>
            </section>

            <section class="bg-white dark:bg-dark-300 pb-150 max-md:pb-20 relative max-sm:overflow-hidden">
                <div
                    class="absolute left-0 right-0 -top-[200px] bg-[url('https://aplio.vercel.app/images/service-bg.png')] bg-no-repeat bg-cover bg-center opacity-70 w-full h-full sm:hidden"
                ></div>
                <div class="container ">
                    <div class="relative z-10">
                        <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex max-md:flex-col -z-10 max-sm:hidden">
                            <div
                                class="  max-md:h-[750px] max-1xl:w-[335px] max-1xl:h-[335px]  1xl:w-[442px] 1xl:h-[442px]  rounded-full bg-primary-200/20 blur-[145px]"
                            ></div>
                            <div
                                class=" max-md:h-[750px] max-1xl:w-[335px] max-1xl:h-[335px]  1xl:w-[442px] 1xl:h-[442px]  rounded-full bg-primary-200/25 -ml-[170px] max-md:ml-0 blur-[145px]"
                            ></div>
                            <div
                                class=" max-md:h-[750px] max-1xl:w-[335px] max-1xl:h-[335px]  1xl:w-[442px] 1xl:h-[442px]  rounded-full bg-primary-200/20 -ml-[170px] max-md:ml-0 blur-[145px]"
                            ></div>
                        </div>
                        <div
                            class=" grid grid-cols-3 max-md:grid-cols-1 max-lg:grid-cols-2  gap-8"
                            data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-duration="1000"
                            data-aos-once="true"
                        >
                            <div
                                class="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav scale-100 hover:scale-105 transition-transform duration-500 hover:transition-transform hover:duration-500"
                            >
                                <div
                                    class="border border-dashed rounded border-gray-100 dark:border-borderColour-dark p-10 h-full max-lg:p-5"
                                >
                                    <img
                                        src="https://aplio.vercel.app/images/services/investment.svg"
                                        alt="image"
                                        class="inline-block dark:hidden mb-6"
                                    />
                                    <a
                                        href="#"
                                        class="block"
                                    >
                                        <h3 class="mb-2.5">Fast and Reliable Deliveries</h3>
                                    </a>
                                    <p class="mb-6">
                                        Our motorbike couriers ensure your packages are delivered swiftly and securely across Kigali. From small parcels to larger goods, we handle all deliveries with care and precision, allowing your business to thrive.
                                    </p>
                                </div>
                            </div>

                            <div
                                class="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav scale-100 hover:scale-105 transition-transform duration-500 hover:transition-transform hover:duration-500"
                            >
                                <div
                                    class="border border-dashed rounded border-gray-100 dark:border-borderColour-dark p-10 h-full max-lg:p-5"
                                >
                                    <img
                                        src="https://aplio.vercel.app/images/services/effeciency.svg"
                                        alt="image"
                                        class="inline-block dark:hidden mb-6"
                                    />
                                    <a
                                        href="#"
                                        class="block"
                                    >
                                        <h3 class="mb-2.5">Business-to-Customer Logistics</h3>
                                    </a>
                                    <p class="mb-6">
                                        Whether you're a restaurant, retail shop, or local entrepreneur, Peleka makes it easy to get your products to your clients. Focus on your core business while we manage the logistics, ensuring timely and efficient deliveries every time.
                                    </p>
                                </div>
                            </div>

                            <div
                                class="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav scale-100 hover:scale-105 transition-transform duration-500 hover:transition-transform hover:duration-500"
                            >
                                <div
                                    class="border border-dashed rounded border-gray-100 dark:border-borderColour-dark p-10 h-full max-lg:p-5"
                                >
                                    <img
                                        src="https://aplio.vercel.app/images/services/finance.svg"
                                        alt="image"
                                        class="inline-block dark:hidden mb-6"
                                    />
                                    <a
                                        href="#"
                                        class="block"
                                    >
                                        <h3 class="mb-2.5">
                                            On-Demand Transport Services
                                        </h3>
                                    </a>
                                    <p class="mb-6">
                                        Need a quick and reliable way to get from point A to B? Peleka’s on-demand transport service connects you with motorbike riders ready to provide a smooth and hassle-free ride within Kigali, perfect for both personal and business needs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white dark:bg-dark-300 pt-150 mb-150 max-md:mb-25 relative overflow-hidden">
                <div className="container ">
                    <div className="mb-12 text-center max-w-[475px] mx-auto relative z-10">
                        <div className="">
                            <p className="section-tagline">Our Pricing</p>
                            <h2>Choose the right plan for you</h2>
                        </div>
                    </div>

                    <div className="relative md:z-10">
                        <div className="absolute left-1/2 top-150 -translate-x-1/2 -translate-y-1/2 flex max-md:flex-col -z-10 max-md:hidden">
                            <div
                                className="max-1xl:w-[335px] max-1xl:h-[335px]  1xl:w-[442px] 1xl:h-[442px]  rounded-full bg-primary-200/20 blur-[145px]"
                            ></div>
                            <div
                                className="max-1xl:w-[335px] max-1xl:h-[335px]  1xl:w-[442px] 1xl:h-[442px]  rounded-full bg-primary-200/25 -ml-[170px] max-md:ml-0 blur-[145px]"
                            ></div>
                            <div
                                className="max-1xl:w-[335px] max-1xl:h-[335px]  1xl:w-[442px] 1xl:h-[442px]  rounded-full bg-primary-200/20 -ml-[170px] max-md:ml-0 blur-[145px]"
                            ></div>
                        </div>
                        <div
                            className="absolute left-1/2 p-[350px] top-25 -translate-x-1/2 -translate-y-1/2 bg-[url('https://aplio.vercel.app/images/price-gradient.png')] bg-no-repeat bg-center bg-contain opacity-70 md:hidden"
                        ></div>
                        <div className="flex max-lg:flex-col items-center gap-8 relative max-md:z-10 pb-12">
                            <div className="bg-white dark:bg-dark-200 shadow-box rounded-medium p-2.5 ">
                                <div className="border border-dashed rounded border-gray-100 dark:border-borderColour-dark p-8 max-md:p-5">
                                    <h3 className="mb-2">Basic</h3>
                                    <p className="mb-6">The prevailing view assumed lorem ipsum was born as a nonsense text.</p>
                                    <div className="price-month mb-16">
                                        <h2>$<span>19.00</span></h2>
                                        <p>Per Month</p>
                                    </div>

                                    <ul
                                        className=" relative after:absolute after:-top-12 after:h-0.5 after:w-full after:bg-[url('https://aplio.vercel.app/images/banking/border.svg')] dark:after:bg-[url('../images/banking/border-dark.svg')] after:bg-center after:bg-no-repeat after:bg-full"
                                    >
                                        <li className="mb-6 flex items-center gap-3.5">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <rect
                                                    width="20"
                                                    height="20"
                                                    rx="10"
                                                    fill=""
                                                    className="fill-primary"
                                                />
                                                <path
                                                    d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                                                    fill=""
                                                    className="fill-paragraph"
                                                />
                                            </svg>

                                            <span>Real-Time Tracking</span>
                                        </li>
                                        <li className="mb-6 flex items-center gap-3.5">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <rect
                                                    width="20"
                                                    height="20"
                                                    rx="10"
                                                    fill=""
                                                    className="fill-primary"
                                                />
                                                <path
                                                    d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                                                    fill=""
                                                    className="fill-paragraph"
                                                />
                                            </svg>
                                            <span>Easy Booking</span>
                                        </li>
                                        <li className="mb-6 flex items-center gap-3.5">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <rect
                                                    width="20"
                                                    height="20"
                                                    rx="10"
                                                    fill=""
                                                    className="fill-primary"
                                                />
                                                <path
                                                    d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                                                    fill=""
                                                    className="fill-paragraph"
                                                />
                                            </svg>
                                            <span>Payment Integration</span>
                                        </li>
                                        <li className="mb-6 flex items-center gap-3.5">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <rect
                                                    width="20"
                                                    height="20"
                                                    rx="10"
                                                    fill=""
                                                    className="fill-primary"
                                                />
                                                <path
                                                    d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                                                    fill=""
                                                    className="fill-paragraph"
                                                />
                                            </svg>
                                            <span>Insights & Analytics</span>
                                        </li>
                                    </ul>

                                    <Link
                                        to="/"
                                        className="btn-outline dark:bg-transparent text-center py-3 w-full"
                                    >
                                        Start Free Trial
                                    </Link>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-dark-200 shadow-box rounded-medium p-2.5 ">
                                <div
                                    className="border border-dashed rounded border-gray-100 dark:border-borderColour-dark p-8 max-md:p-5 lg:px-8 lg:pt-3 lg:pb-15  "
                                >
                                    <div className="flex justify-end mb-2.5">
                                        <span className=" -mr-4 bg-primary text-paragraph py-1.5 px-3 rounded-full font-medium"> Save 40% </span>
                                    </div>
                                    <h3 className="mb-2">Standard</h3>
                                    <p className="mb-6">
                                        Take your courier and transport management to the next level with Peleka’s Standard Plan.
                                    </p>
                                    <div className="price-month mb-16">
                                        <h2>$<span>32.00</span></h2>
                                        <p>Per Month</p>
                                    </div>

                                    <ul
                                        className=" relative after:absolute after:-top-12 after:h-0.5 after:w-full after:bg-[url('https://aplio.vercel.app/images/banking/border.svg')] after:bg-center after:bg-no-repeat after:bg-full"
                                    >
                                        <li className="mb-6 flex items-center gap-3.5">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <rect
                                                    width="20"
                                                    height="20"
                                                    rx="10"
                                                    fill=""
                                                    className="fill-primary"
                                                />
                                                <path
                                                    d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                                                    fill=""
                                                    className="fill-paragraph"
                                                />
                                            </svg>
                                            <span>Comprehensive Delivery Tracking</span>
                                        </li>
                                        <li className="mb-6 flex items-center gap-3.5">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <rect
                                                    width="20"
                                                    height="20"
                                                    rx="10"
                                                    fill=""
                                                    className="fill-primary"
                                                />
                                                <path
                                                    d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                                                    fill=""
                                                    className="fill-paragraph"
                                                />
                                            </svg>
                                            <span>Custom Invoices & Quotes</span>
                                        </li>
                                        <li className="mb-6 flex items-center gap-3.5">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <rect
                                                    width="20"
                                                    height="20"
                                                    rx="10"
                                                    fill=""
                                                    className="fill-primary"
                                                />
                                                <path
                                                    d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                                                    fill=""
                                                    className="fill-paragraph"
                                                />
                                            </svg>
                                            <span>Integrated Payment Solutions</span>
                                        </li>
                                        <li className="mb-6 flex items-center gap-3.5">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <rect
                                                    width="20"
                                                    height="20"
                                                    rx="10"
                                                    fill=""
                                                    className="fill-primary"
                                                />
                                                <path
                                                    d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                                                    fill=""
                                                    className="fill-paragraph"
                                                />
                                            </svg>
                                            <span>In-Depth Insights & Reports</span>
                                        </li>
                                    </ul>

                                    <Link
                                        to="/"
                                        className="btn  text-center py-3 w-full "
                                    >
                                        Get Started Now
                                    </Link>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-dark-200 shadow-box rounded-medium p-2.5 ">
                                <div className="border border-dashed rounded border-gray-100 dark:border-borderColour-dark p-8 max-md:p-5">
                                    <h3 className="mb-2">Premium</h3>
                                    <p className="mb-6">
                                        Unlock the full potential of your courier and transport operations with Peleka’s Premium Plan.
                                    </p>
                                    <div className="price-month mb-16">
                                        <h2>$<span>48.00</span></h2>
                                        <p>Per Month</p>
                                    </div>
                                    <ul
                                        className=" relative after:absolute after:-top-12 after:h-0.5 after:w-full after:bg-[url('https://aplio.vercel.app/images/banking/border.svg')]  after:bg-center after:bg-no-repeat after:bg-full"
                                    >
                                        <li className="mb-6 flex items-center gap-3.5">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <rect
                                                    width="20"
                                                    height="20"
                                                    rx="10"
                                                    fill=""
                                                    className="fill-primary"
                                                />
                                                <path
                                                    d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                                                    fill=""
                                                    className="fill-paragraph"
                                                />
                                            </svg>
                                            <span>Advanced Delivery Analytics</span>
                                        </li>
                                        <li className="mb-6 flex items-center gap-3.5">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <rect
                                                    width="20"
                                                    height="20"
                                                    rx="10"
                                                    fill=""
                                                    className="fill-primary"
                                                />
                                                <path
                                                    d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                                                    fill=""
                                                    className="fill-paragraph"
                                                />
                                            </svg>
                                            <span>Priority Customer Support</span>
                                        </li>
                                        <li className="mb-6 flex items-center gap-3.5">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <rect
                                                    width="20"
                                                    height="20"
                                                    rx="10"
                                                    fill=""
                                                    className="fill-primary"
                                                />
                                                <path
                                                    d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                                                    fill=""
                                                    className="fill-paragraph"
                                                />
                                            </svg>
                                            <span>Custom Branding Options</span>
                                        </li>
                                        <li className="mb-6 flex items-center gap-3.5">
                                            <svg
                                                width="20"
                                                height="20"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <rect
                                                    width="20"
                                                    height="20"
                                                    rx="10"
                                                    fill=""
                                                    className="fill-primary"
                                                />
                                                <path
                                                    d="M9.31661 13.7561L14.7491 8.42144C15.0836 8.0959 15.0836 7.5697 14.7491 7.24416C14.4145 6.91861 13.8736 6.91861 13.539 7.24416L8.7116 11.9901L6.46096 9.78807C6.12636 9.46253 5.58554 9.46253 5.25095 9.78807C4.91635 10.1136 4.91635 10.6398 5.25095 10.9654L8.1066 13.7561C8.27347 13.9184 8.49253 14 8.7116 14C8.93067 14 9.14974 13.9184 9.31661 13.7561Z"
                                                    fill=""
                                                    className="fill-paragraph"
                                                />
                                            </svg>
                                            <span>Multi-User Access</span>
                                        </li>
                                    </ul>

                                    <Link
                                        to="/"
                                        className="btn-outline dark:bg-transparent text-center py-3 w-full"
                                    >
                                        Get Started Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="relative pb-25  max-md:overflow-hidden">
                <div class="container relative max-md:text-center">
                    <div class="absolute left-1/2 -bottom-[442px] -translate-x-1/2  flex max-md:flex-col -z-10 max-md:hidden">
                        <div
                            class="max-md:hidden max-1xl:w-[335px] max-1xl:h-[335px]  1xl:w-[442px] 1xl:h-[442px]  rounded-full bg-primary-200/20 blur-[145px]"
                        ></div>
                        <div
                            class="max-1xl:w-[335px] max-1xl:h-[335px]  1xl:w-[442px] 1xl:h-[442px]  rounded-full bg-primary-200/25 -ml-[170px] max-md:ml-0 blur-[145px]"
                        ></div>
                        <div
                            class="max-1xl:w-[335px] max-1xl:h-[335px]  1xl:w-[442px] 1xl:h-[442px]  rounded-full bg-primary-200/20 -ml-[170px] max-md:ml-0 blur-[145px]"
                        ></div>
                    </div>
                    <div
                        class="absolute left-1/2 -bottom-[350px] p-[350px] -translate-x-1/2 bg-contain w-full h-full  bg-[url('https://aplio.vercel.app/images/hero-gradient.png')] bg-no-repeat bg-center opacity-70 md:hidden -z-10"
                    ></div>
                    <div>
                        <div>
                            <p class="section-tagline">Start Today</p>
                        </div>
                        <div class="grid grid-cols-12 grid-y-10 items-start">
                            <div class="max-md:col-span-full md:col-span-6 lg:col-span-7">
                                <h2 class="mb-5 max-lg:text-[32px] text-[48px] font-semibold ">Start your free trial now!</h2>
                                <p>By creating a custom Web design for your business, we can bring your vision to life.</p>
                            </div>
                            <div class="max-md:col-span-full md:col-span-6 lg:col-span-5 max-md:mt-5 ">
                                <form>
                                    <div class="grid grid-cols-12 items-center max-lg:gap-y-5 lg:gap-x-6 ">
                                        <input
                                            type="text"
                                            placeholder="Enter your email"
                                            class="bg-transparent placeholder:text-light dark:placeholder:text-[#A1A49D] text-[#A1A49D] text-light focus:outline-none  leading-[1.5] border rounded-[60px] bg-white dark:bg-dark-200 dark:border-[#31332F] border-borderColour max-lg:col-span-full lg:col-span-8 h-full ps-5 max-lg:py-3.5 focus:border-primary dark:focus:border-primary  duration-300 transition-all outline-none"
                                        />
                                        <button class="btn max-lg:col-span-full lg:col-span-4">Get Started</button>
                                    </div>
                                </form>
                                <ul class=" flex max-md:flex-col max-lg:gap-y-2.5 items-center max-lg:justify-between lg:gap-5 mt-6 ">
                                    <li class="flex items-center">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="mr-3"
                                        >
                                            <path
                                                d="M14.125 7.75L8.62497 13L5.875 10.375M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                                                stroke=""
                                                class="stroke-paragraph dark:stroke-primary"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                        <p>No Credit Card Required</p>
                                    </li>
                                    <li class="flex items-center">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="mr-3"
                                        >
                                            <path
                                                d="M14.125 7.75L8.62497 13L5.875 10.375M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                                                stroke=""
                                                class="stroke-paragraph dark:stroke-primary"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                        <p>Free For 30 Day Trial.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services