import React from 'react'
import { Hero } from '../components'
import { Link } from 'react-router-dom'

const Home = () => {

    const clientLogos = [
        {
            id: 1,
            image: "https://aplio.vercel.app/images/clients/axeptio.svg",
            alt: "axeptio"
        },
        {
            id: 2,
            image: "https://aplio.vercel.app/images/clients/axeptio.svg",
            alt: "client 2"
        },
        {
            id: 3,
            image: "https://aplio.vercel.app/images/clients/axeptio.svg",
            alt: "client 3"
        },
        {
            id: 4,
            image: "https://aplio.vercel.app/images/clients/axeptio.svg",
            alt: "client 4"
        },
        {
            id: 5,
            image: "https://aplio.vercel.app/images/clients/axeptio.svg",
            alt: "client 5"
        },
        {
            id: 6,
            image: "https://aplio.vercel.app/images/clients/axeptio.svg",
            alt: "client 6"
        },
        {
            id: 7,
            image: "https://aplio.vercel.app/images/clients/axeptio.svg",
            alt: "client 7"
        },
        {
            id: 8,
            image: "https://aplio.vercel.app/images/clients/axeptio.svg",
            alt: "client 8"
        },
        {
            id: 9,
            image: "https://aplio.vercel.app/images/clients/axeptio.svg",
            alt: "client 9"
        }
    ];

    return (
        <>
            <Hero />

            <section className="pt-150 relative">
                <div
                    className="absolute left-0 right-0 top-150 bg-[url('https://aplio.vercel.app/images/core-gradient.png')] bg-no-repeat bg-center opacity-70 w-full h-full bg-[length:600px_1800px] md:hidden"
                ></div>
                <div className="container">
                    <div className="mb-12 text-center max-w-[575px] mx-auto">
                        <p className="section-tagline">Core Features</p>
                        <h2>Smart Features for Seamless Delivery and Transport</h2>
                    </div>
                    <div className="relative z-10">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex max-md:flex-col -z-10 max-md:hidden">
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
                            className="flex flex-col  relative [&>*:not(:last-child)]:after:absolute [&>*:not(:last-child)]:after:h-0.5 [&>*:not(:last-child)]:after:w-full [&>*:not(:last-child)]:after:content-[url('https://aplio.vercel.app/images/payment/seperator.png')] dark:[&>*:not(:last-child)]:after:content-[url('https://aplio.vercel.app/images/payment/seperator.png')] [&>*:not(:last-child)]:after:bottom-0 [&>*:not(:last-child)]:after:overflow-hidden max-md:[&>*:not(:last-child)]:after:hidden"
                        >
                            <div
                                className="relative grid grid-cols-3 max-lg:grid-cols-1 [&>*:nth-child(3n+1)]:before:absolute [&>*:nth-child(3n+1)]:before:left-0 [&>*:nth-child(3n+1)]:before:top-1/2 [&>*:nth-child(3n+1)]:before:-translate-y-1/2 [&>*:nth-child(3n+1)]:before:w-[1px] [&>*:nth-child(3n+1)]:before:h-full [&>*:nth-child(3n+1)]:before:content-[url('https://aplio.vercel.app/images/payment/coreborder-right.svg')] dark:[&>*:nth-child(3n+1)]:before:content-[url('https://aplio.vercel.app/images/payment/coreborder-right.svg')] max-lg:[&>*:nth-child(3n+1)]:before:hidden"
                            >
                                <div
                                    className=" relative  px-0 lg:px-12 py-12 after:absolute lg:after:right-0 lg:after:top-1/2 after:overflow-hidden lg:after:-translate-y-1/2 lg:after:w-[1px] lg:after:h-full lg:after:content-[url('https://aplio.vercel.app/images/payment/coreborder-right.svg')] lg:dark:after:content-[url('https://aplio.vercel.app/images/payment/coreborder-right.svg')] group max-lg:after:content-[url('https://aplio.vercel.app/images/payment/coreborder-bottom-mobile.svg')]  dark:max-lg:after:content-[url('https://aplio.vercel.app/images/payment/coreborder-bottom-mobile.svg')] max-lg:after:w-full max-lg:after:h-[1px] max-lg:after:bottom-0 max-lg:top-auto  "
                                >
                                    <img
                                        src="https://aplio.vercel.app/images/payment/invoice.svg"
                                        alt="payment logo"
                                        className="inline-block dark:hidden mb-6"
                                    />
                                    <h3
                                        className="mb-2.5 relative after:absolute after:-left-[49px] after:w-0.5 after:h-full after:bg-primary after:opacity-0 group-hover:after:opacity-100 after:duration-500 after:transition-opacity"
                                    >
                                        Real-Time Package Tracking
                                    </h3>
                                    <p>
                                        Track your deliveries with live updates from pickup to doorstep, ensuring transparency and control.
                                    </p>
                                </div>
                                <div
                                    className=" relative  px-0 lg:px-12 py-12 after:absolute lg:after:right-0 lg:after:top-1/2 after:overflow-hidden lg:after:-translate-y-1/2 lg:after:w-[1px] lg:after:h-full lg:after:content-[url('https://aplio.vercel.app/images/payment/coreborder-bottom-mobile.svg')] lg:dark:after:content-[url('https://aplio.vercel.app/images/payment/coreborder-bottom-mobile.svg')] group max-lg:after:content-[url('https://aplio.vercel.app/images/payment/coreborder-bottom-mobile.svg')]  dark:max-lg:after:content-[url('https://aplio.vercel.app/images/payment/coreborder-bottom-mobile.svg')] max-lg:after:w-full max-lg:after:h-[1px] max-lg:after:bottom-0 max-lg:top-auto  "
                                >
                                    <img
                                        src="https://aplio.vercel.app/images/payment/insight.svg"
                                        alt="payment logo"
                                        className="inline-block dark:hidden mb-6"
                                    />
                                    <h3
                                        className="mb-2.5 relative after:absolute after:-left-[49px] after:w-0.5 after:h-full after:bg-primary  after:opacity-0 group-hover:after:opacity-100 after:duration-500 after:transition-opacity"
                                    >
                                        Scheduled Pickups
                                    </h3>
                                    <p>
                                        Plan ahead with our flexible scheduled pickups, available across Kigali at your convenience.
                                    </p>
                                </div>
                                <div
                                    className=" relative  px-0 lg:px-12 py-12 after:absolute lg:after:right-0 lg:after:top-1/2 after:overflow-hidden lg:after:-translate-y-1/2 lg:after:w-[1px] lg:after:h-full lg:after:content-[url('https://aplio.vercel.app/images/payment/coreborder-bottom-mobile.svg')] lg:dark:after:content-[url('https://aplio.vercel.app/images/payment/coreborder-bottom-mobile.svg')] group max-lg:after:content-[url('https://aplio.vercel.app/images/payment/coreborder-bottom-mobile.svg')]  dark:max-lg:after:content-[url('https://aplio.vercel.app/images/payment/coreborder-bottom-mobile.svg')] max-lg:after:w-full max-lg:after:h-[1px] max-lg:after:bottom-0 max-lg:top-auto  "
                                >
                                    <img
                                        src="https://aplio.vercel.app/images/payment/inventory.svg"
                                        alt="payment logo"
                                        className="inline-block dark:hidden mb-6"
                                    />
                                    <h3
                                        className="mb-2.5 relative after:absolute after:-left-[49px] after:w-0.5 after:h-full after:bg-primary  after:opacity-0 group-hover:after:opacity-100 after:duration-500 after:transition-opacity"
                                    >
                                        Same-Day Delivery
                                    </h3>
                                    <p>
                                        Urgent deliveries made easy. Peleka offers same-day shipping within Kigali for time-sensitive needs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative pt-[200px] overflow-x-hidden">
                <div
                    className="container relative z-10 max-md:[&>:nth-child(odd)]:pb-0 [&>:nth-child(odd)]:pb-25 lg:[&>:nth-child(odd)]:pb-150 max-md:[&>:nth-child(even)]:pt-10 [&>:nth-child(even)]:pt-25 lg:[&>:nth-child(even)]:pt-[200px]  [&>*:nth-child(odd)]:after:absolute [&>*:nth-child(odd)]:after:h-0.5 [&>*:nth-child(odd)]:after:w-full [&>*:nth-child(odd)]:after:bg-[url('../images/payment/seperator.png')] dark:[&>*:nth-child(odd)]:after:bg-[url('../images/payment/seperator-dark.png')]  [&>*:nth-child(odd)]:after:bottom-0  [&>*:nth-child(odd)]:after:left-1/2 [&>*:nth-child(odd)]:after:-translate-x-1/2  [&>*:nth-child(odd)]:after:bg-no-repeat [&>*:nth-child(odd)]:after:bg-center [&>*:nth-child(odd)]:after:bg-full"
                >
                    <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:gap-10 gap-25 1xl:gap-x-24 items-end relative">
                        <div
                            className="relative max-md:order-1"
                            data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-duration="1000"
                            data-aos-once="true"
                        >
                            <img
                                src="https://aplio.vercel.app/images/payment/whyUs-bg.png"
                                alt="hero Image"
                                className="inline-block dark:hidden w-full rounded-medium shadow-nav"
                            />
                            <div className="absolute left-1/2 -translate-x-1/2 max-lg:w-8/12 mx-auto bottom-2.5 w-[400px] aspect-video">
                                <img
                                    src="https://aplio.vercel.app/images/payment/whyUs-image.png"
                                    alt="hero Image"
                                    className="inline-block dark:hidden  rounded-t-medium  "
                                />
                            </div>
                        </div>
                        <div className="relative max-md:order-2">
                            <p className="section-tagline">WHY CHOOSE US</p>

                            <h2 className="max-lg:mt-5 mb-8">
                                Fast, Reliable, and <br /> Always On-Time
                            </h2>
                            <p className="max-lg:mt-6 mb-11">
                                At Peleka, we pride ourselves on providing fast, dependable motorbike deliveries and rides across Kigali. Whether you're sending packages or need transport, we ensure timely service with real-time tracking and trusted riders.
                            </p>
                            <ul className="mb-14 [&>*:not(:last-child)]:mb-6 max-lg:[&>*:not(:last-child)]:mb-4">
                                <li className="flex items-center gap-x-2 ">
                                    <span
                                        className=" relative  rounded-full bg-white dark:bg-dark-200 shadow-icon flex item-center justify-center gap-6"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="30"
                                            height="30"
                                            viewBox="0 0 30 30"
                                            fill="none"
                                        >
                                            <circle
                                                cx="15"
                                                cy="15"
                                                r="14"
                                                fill=""
                                                className="fill-[#E6FFB1] dark:fill-[#3B3C39]"
                                            />
                                            <path
                                                d="M15 0C6.75 0 0 6.75 0 15C0 23.25 6.75 30 15 30C23.25 30 30 23.25 30 15C30 6.75 23.25 0 15 0ZM16.125 1.25C20.5 1.625 24.25 4 26.5 7.5H12.375L16.125 1.25ZM18.375 8.75L22.125 15L18.375 21.25H11.5L7.875 14.75L11.625 8.75H18.375ZM14.75 1.25L7.25 13.5L3.625 7.25C6.125 3.75 10.125 1.375 14.75 1.25ZM1.25 15C1.25 12.625 1.875 10.375 2.875 8.5L10.125 21.25H2.75C1.75 19.375 1.25 17.25 1.25 15ZM13.875 28.75C9.5 28.375 5.75 26 3.5 22.5H17.625L13.875 28.75ZM15.375 28.75L23 16.25L26.75 22.375C24.25 26.125 20.125 28.625 15.375 28.75ZM19.875 8.75H27.25C28.25 10.625 28.75 12.75 28.75 15C28.75 17.125 28.25 19.25 27.375 21L19.875 8.75Z"
                                                fill=""
                                                className="fill-paragraph dark:fill-primary"
                                            />
                                        </svg>
                                    </span>
                                    <span className="dark:text-white"> It’s scalable and secure </span>
                                </li>
                                <li className="flex items-center gap-x-2">
                                    <span className=" relative  rounded-full bg-white dark:bg-dark-200 shadow-icon flex item-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="28"
                                            height="30"
                                            viewBox="0 0 28 30"
                                            fill="none"
                                        >
                                            <path
                                                d="M11 1.5C12.2 0.7 13.5 0.5 14 0.5C14.8 0.5 15.6667 0.833333 16 1C18 2.16667 22.5 4.8 24.5 6C26.5 7.2 27.3333 9.16667 27.5 10V19C27.5 21.4 26.1667 23 25.5 23.5C23.5 24.6667 19 27.3 17 28.5C15 29.7 12.8333 29.3333 12 29C9.33333 27.5 3.7 24.3 2.5 23.5C1.3 22.7 0.666667 20.5 0.5 19.5V10.5C0.5 8.9 1.83333 7.16667 2.5 6.5C4.83333 5.16667 9.8 2.3 11 1.5Z"
                                                fill=""
                                                className="fill-[#E6FFB1] dark:fill-[#3B3C39]"
                                            />
                                            <path
                                                d="M25.095 5.53842L17.072 0.834716C15.1751 -0.278239 12.8189 -0.278239 10.922 0.834716L2.90499 5.53842C1.11547 6.5928 0 8.51411 0 10.5584V19.4445C0 21.4888 1.11547 23.4101 2.90499 24.4645L10.922 29.1682C11.8705 29.7247 12.9323 30 14 30C15.0677 30 16.1295 29.7188 17.078 29.1682L25.095 24.4645C26.8845 23.416 28 21.4888 28 19.4445V10.5584C27.994 8.51411 26.8845 6.5928 25.095 5.53842ZM3.55518 6.61037L11.5722 1.90667C13.0695 1.02802 14.9246 1.02802 16.4218 1.90667L24.4389 6.61037C24.9638 6.92082 25.4171 7.31914 25.775 7.78776L14 14.2839L2.219 7.79362C2.58287 7.325 3.03025 6.92082 3.55518 6.61037ZM3.55518 23.3867C2.14742 22.5608 1.27056 21.0495 1.27056 19.4445V10.5584C1.27056 9.97852 1.38389 9.41033 1.59864 8.88314L13.3617 15.3676V28.7055C12.7414 28.6235 12.1329 28.4184 11.5722 28.0904L3.55518 23.3867ZM26.7235 19.4445C26.7235 21.0495 25.8466 22.5608 24.4389 23.3867L16.4218 28.0904C15.8611 28.4184 15.2527 28.6235 14.6323 28.7055V15.3617L26.3954 8.87728C26.6101 9.40447 26.7235 9.97266 26.7235 10.5526V19.4445Z"
                                                fill=""
                                                className="fill-paragraph dark:fill-primary"
                                            />
                                        </svg>
                                    </span>
                                    <span className="dark:text-white"> Artificial Intelligence Feature </span>
                                </li>
                                <li className="flex items-center gap-x-2 ">
                                    <span className="relative rounded-full bg-white dark:bg-dark-200 shadow-icon flex item-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="28"
                                            height="30"
                                            viewBox="0 0 28 30"
                                            fill="none"
                                        >
                                            <path
                                                d="M9.99965 3C11.5997 1 13.333 0.5 13.9997 0.5C15.5996 0.5 16.9997 1.83333 17.4998 2.5C19.8331 5 24.8998 10.6 26.4998 13C28.0998 15.4 27.1664 17.6667 26.4998 18.5C23.9998 21.1667 18.4998 26.9 16.4998 28.5C14.4998 30.1 12.6664 29.5 11.9998 29C9.16639 26.5 3.09965 20.9 1.49965 18.5C-0.100346 16.1 0.832987 13.8333 1.49965 13C3.66632 10.5 8.39965 5 9.99965 3Z"
                                                fill=""
                                                className="fill-[#E6FFB1] dark:fill-[#3B3C39]"
                                            />
                                            <path
                                                d="M0.0068501 16.2598C0.0068501 16.2656 0.0068501 16.2715 0.0068501 16.2598V16.2598ZM27.9943 16.2363C27.8869 17.5078 27.3381 18.9609 26.3897 19.957L17.335 28.6289C16.4641 29.5078 15.283 30 14.0125 30C12.742 30 11.5549 29.5078 10.6781 28.6172L1.63527 19.9805C0.674921 18.9727 0.120184 17.5195 0.0068501 16.2422C-0.0587641 14.9063 0.346851 13.5469 1.22966 12.416L10.4156 1.66406C11.3044 0.603516 12.6107 0 14.0065 0C15.4083 0 16.7146 0.609375 17.6034 1.66992L26.7536 12.3984C27.6483 13.541 28.0539 14.9004 27.9943 16.2363ZM1.28931 15.5684L8.19073 14.4434L13.0521 1.38867C12.4079 1.57617 11.8353 1.94531 11.3999 2.46094L11.3939 2.4668L2.21984 13.2012C1.67106 13.9043 1.36089 14.7305 1.28931 15.5684ZM13.3742 19.2363L8.49494 15.6621L1.35492 16.8223C1.51598 17.6484 1.91563 18.4453 2.54194 19.1074L11.5728 27.7324C12.0739 28.2363 12.6942 28.5645 13.3742 28.6934V19.2363ZM18.5876 14.7773L14.0125 2.44336L9.4195 14.7715L14.0125 18.1348L18.5876 14.7773ZM26.6522 16.8223L19.5121 15.6563L14.6507 19.2305V28.6875C15.3307 28.5586 15.9511 28.2363 16.4402 27.7383L25.489 19.0781C26.1034 18.4336 26.4911 17.6484 26.6522 16.8223ZM26.7118 15.5684C26.6343 14.7246 26.3241 13.8984 25.7634 13.1777L16.6251 2.4668C16.1897 1.94531 15.6111 1.57031 14.9669 1.38867L19.8104 14.4434L26.7118 15.5684ZM27.9943 16.2363C28.0002 16.2246 28.0002 16.2949 27.9943 16.2363V16.2363Z"
                                                fill=""
                                                className="fill-paragraph dark:fill-primary"
                                            />
                                        </svg>
                                    </span>

                                    <span className="dark:text-white"> Offline version available </span>
                                </li>
                            </ul>
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

                                    <a
                                        to="/"
                                        className="btn-outline dark:bg-transparent text-center py-3 w-full"
                                    >
                                        Get Started Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="client bg-white dark:bg-dark-300">
                <div className="container overflow-hidden max-lg:!px-0">
                    <div className="relative after:absolute before:absolute after:w-[120px] after:h-[40px] after:bg-gradient-to-r after:from-white after:from-[37.5%]  after:top-1/2 after:-translate-y-1/2 after:left-0 after:z-10 before:w-[120px] before:h-[40px] before:bg-gradient-to-l before:from-white before:from-[37.5%] before:right-0  before:top-1/2 before:-translate-y-1/2  before:z-10 dark:after:from-dark-gradient dark:before:from-dark-gradient">
                        <div className="absolute left-0 -top-[1px] w-full max-lg:hidden">
                            <img
                                src="https://aplio.vercel.app/images/clients/client-border.svg"
                                alt="border"
                                className="inline-block dark:hidden"
                            />
                        </div>
                        <div className="marquee overflow-hidden whitespace-nowrap">
                            {/* First set of logos */}
                            <div className="marquee-content inline-flex items-center justify-between py-8 animate-marquee">
                                {clientLogos.map((client) => (
                                    <div key={client.id} className="marquee-content-list">
                                        <img
                                            src={client.image}
                                            alt={client.alt}
                                            className="inline-block dark:hidden"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx global>{`
                    .marquee {
                        width: 100%;
                    }
                    
                    .marquee-content {
                        min-width: 100%;
                    }

                    @keyframes marquee {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-100%);
                        }
                    }

                    .animate-marquee {
                        animation: marquee 25s linear infinite;
                    }
                `}</style>
            </section>

            <section className="relative pt-150 max-md:pt-25 pb-20 max-md:pb-25 max-md:overflow-hidden">
                <div className="container relative ">
                    <div className="absolute left-1/2 -bottom-[442px] -translate-x-1/2  flex max-md:flex-col -z-10 max-md:hidden">
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
                        className="absolute left-1/2 -bottom-[350px] p-[350px] -translate-x-1/2 bg-contain w-full h-full  bg-[url('https://aplio.vercel.app/images/hero-gradient.png')] bg-no-repeat bg-center opacity-70 md:hidden -z-10"
                    ></div>
                    <div className=" text-center mx-auto">
                        <h2 className="mb-5 max-lg:text-[32px] text-[48px] font-semibold ">
                            Connect with Your <br /> Clients Effortlessly
                        </h2>
                        <p className="max-lg:mt-6 mb-12 max-w-[400px] mx-auto">
                            Choose Peleka for a unique delivery experience that prioritizes your business needs. Our innovative solutions ensure that your products reach your clients swiftly and safely. With Peleka, you’ll have more time to focus on what you do best—growing your business. Join us today!
                        </p>
                        <Link
                            to="/"
                            className="btn"
                        >
                            Get Started Today
                        </Link>
                        <ul
                            className=" flex max-lg:flex-col max-lg:gap-5  items-center justify-between max-lg:mt-5 mt-20 max-w-[815px] mx-auto"
                        >
                            <li className="flex items-center">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mr-3"
                                >
                                    <path
                                        d="M14.125 7.75L8.62497 13L5.875 10.375M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                                        stroke=""
                                        className="stroke-paragraph dark:stroke-primary"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                <p>No Hidden Fees.</p>
                            </li>
                            <li className="flex items-center">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mr-3"
                                >
                                    <path
                                        d="M14.125 7.75L8.62497 13L5.875 10.375M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                                        stroke=""
                                        className="stroke-paragraph dark:stroke-primary"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                <p>Satisfaction Guaranteed.</p>
                            </li>
                            <li className="flex items-center">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mr-3"
                                >
                                    <path
                                        d="M14.125 7.75L8.62497 13L5.875 10.375M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                                        stroke=""
                                        className="stroke-paragraph dark:stroke-primary"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                                <p>Priority Support.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home