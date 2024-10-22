import React from 'react'
import { Hero } from '../components'

const Home = () => {
    return (
        <>
            <Hero />

            <section>
                <div className="container">
                    <div className="grid grid-cols-12 gap-5 bg-white dark:bg-dark-200 shadow-nav p-2.5 items-center rounded-medium">
                        <div
                            className="max-lg:col-span-full lg:col-span-5 lg:max-w-[425px] pl-12 max-lg:text-center max-lg:pl-0 max-lg:py-12"
                        >
                            <h2 className=" mb-8">
                                Thousands of <br />
                                users have faith in us
                            </h2>
                            <p>Boost your insights that help you to grow business</p>
                        </div>
                        <div className="max-lg:col-span-full lg:col-span-7">
                            <div className=" grid grid-cols-3 max-lg:grid-cols-1 gap-3">
                                <div
                                    className=" border border-dashed border-gray-100 rounded dark:border-borderColour-dark py-12 px-7 text-center"
                                >
                                    <h3 className="text-[48px] mb-5">4.7</h3>
                                    <div className="mb-4">
                                        <i className="fa-solid fa-star text-[#FFC107]"></i>
                                        <i className="fa-solid fa-star text-[#FFC107]"></i>
                                        <i className="fa-solid fa-star text-[#FFC107]"></i>
                                        <i className="fa-solid fa-star text-[#FFC107]"></i>
                                        <i className="fa-solid fa-star text-[#FFC107]"></i>
                                    </div>
                                    <h4 className="text-xl mb-3.5 font-semibold">Capterra</h4>
                                    <p>Top Customer Fulfilment</p>
                                </div>
                                <div
                                    className=" border border-dashed border-gray-100 rounded dark:border-borderColour-dark py-12 px-7 text-center"
                                >
                                    <h3 className="text-[48px] mb-5">4.3</h3>
                                    <div className="mb-4">
                                        <i className="fa-solid fa-star text-[#FFC107]"></i>
                                        <i className="fa-solid fa-star text-[#FFC107]"></i>
                                        <i className="fa-solid fa-star text-[#FFC107]"></i>
                                        <i className="fa-solid fa-star text-[#FFC107]"></i>
                                        <i className="fa-solid fa-star text-[#FFC107]"></i>
                                    </div>
                                    <h4 className="text-xl mb-3.5 font-semibold">G2 Rating</h4>
                                    <p>Best Payment Software</p>
                                </div>
                                <div
                                    className=" border border-dashed border-gray-100 rounded dark:border-borderColour-dark py-12 px-7 text-center"
                                >
                                    <h3 className="text-[48px] mb-5">4.9</h3>
                                    <div className="mb-4">
                                        <i className="fa-solid fa-star text-[#FFC107]"></i>
                                        <i className="fa-solid fa-star text-[#FFC107]"></i>
                                        <i className="fa-solid fa-star text-[#FFC107]"></i>
                                        <i className="fa-solid fa-star text-[#FFC107]"></i>
                                        <i className="fa-solid fa-star text-[#FFC107]"></i>
                                    </div>
                                    <h4 className="text-xl mb-3.5 font-semibold">Trustpilot</h4>
                                    <p>Top Payment Company</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-150 relative">
                <div
                    className="absolute left-0 right-0 top-150 bg-[url('https://aplio.vercel.app/images/core-gradient.png')] bg-no-repeat bg-center opacity-70 w-full h-full bg-[length:600px_1800px] md:hidden"
                ></div>
                <div className="container">
                    <div className="mb-12 text-center max-w-[575px] mx-auto">
                        <p className="section-tagline">Core Features</p>
                        <h2>Features that help you run your business</h2>
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
                                        Useful Features
                                    </h3>
                                    <p>The prevailing view asumed lorem ipsum was born as nonsense text.</p>
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
                                        Insights and Reports
                                    </h3>
                                    <p>The prevailing view asumed lorem ipsum was born as nonsense text.</p>
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
                                        Managing Inventory
                                    </h3>
                                    <p>The prevailing view asumed lorem ipsum was born as nonsense text.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home