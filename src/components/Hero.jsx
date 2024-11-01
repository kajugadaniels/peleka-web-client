import React from 'react'
import { HeroDevice } from '../assets/img'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section className="hero relative lg:pt-[260px] max-lg:pt-[160px] pb-[140px] overflow-hidden lg:overflow-visible">
            <div className="container">
                <div className="grid grid-cols-12 gap-5 items-end relative  z-10">
                    <div
                        className="max-md:col-span-full md:col-span-7 max-md:mb-[350px]"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-duration="1000"
                        data-aos-once="true"
                    >
                        <p className=" mb-4 font-medium uppercase">Digital Payment Solution</p>
                        <h1 className="mb-10">
                            Peleka: <span className="font-playfair italic inline-block px-5  pt-0.5 pb-2.5 leading-none">Kigali’s</span> Quickest Rides & Deliveries
                        </h1>
                        <p className="mb-12 max-w-[590px]">
                            With Peleka, your packages and personal transport needs are just a tap away. Experience swift services across Kigali, powered by motorbikes.
                        </p>
                        <div className="flex items-center gap-4">
                            <Link
                                to="/contact"
                                className="btn"
                            >
                                Get Started
                            </Link>
                            <Link
                                to="/request-demo"
                                className="btn-outline"
                            >
                                Get a Demo
                            </Link>
                        </div>
                    </div>
                    <div
                        className="max-md:col-span-full md:col-span-5 relative md:z-10"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-duration="1000"
                        data-aos-once="true"
                    >
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex -z-10 max-md:hidden">
                            <div
                                className="max-lg:hidden max-1xl:w-[335px] max-1xl:h-[335px]  1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/20 blur-[145px]"
                            ></div>
                            <div
                                className="max-lg:w-[335px] max-1xl:h-[335px] max-1xl:blur-[80px]  1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/25 -ml-[170px] -mt-150 max-md:ml-0 blur-[145px]"
                            ></div>
                            <div
                                className="max-lg:hidden max-1xl:w-[335px] max-1xl:h-[335px]  1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/20 -ml-[170px] blur-[145px]"
                            ></div>
                        </div>
                        <div
                            className="absolute left-1/2 -bottom-150 p-[350px] -translate-x-1/2 bg-contain w-full h-full  bg-[url('https://aplio.vercel.app/images/hero-gradient.png')] bg-no-repeat bg-center opacity-70 md:hidden -z-10"
                        ></div>
                        <div className="w-full h-full">
                            <div className="relative  ">
                                <img
                                    src="https://aplio.vercel.app/images/payment/payment-hero.png"
                                    alt="hero Image"
                                    className="inline-block dark:hidden w-full rounded-medium shadow-nav"
                                />
                                <div
                                    className="absolute left-1/2 -translate-x-1/2 bottom-2.5 max-md:w-[285px] max-lg:w-4/5 lg:w-[285px] lg:aspect-video"
                                >
                                    <img
                                        src={HeroDevice}
                                        alt="hero Image"
                                        className="inline-block dark:hidden rounded-t-medium  w-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero