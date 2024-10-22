import React from 'react'

const RequestDemo = () => {
    return (
        <>
            <section className="py-[200px] max-md:pt-150 relative overflow-hidden">
                <div
                    className="absolute left-1/2 top-0 w-full h-[550px] -translate-x-1/2 bg-cover  bg-[url('https://aplio.vercel.app/images/hero-gradient.png')] bg-no-repeat bg-center opacity-70 md:hidden -z-10"
                ></div>
                <div
                    className="container relative"
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-duration="1000"
                    data-aos-once="true"
                >
                    <div className="mb-12 text-center max-w-[475px] mx-auto">
                        <p className="section-tagline">Contact</p>

                        <h2>Request A Demo</h2>
                    </div>
                    <div className="relative z-10 max-w-[850px] mx-auto">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex -z-10 max-md:hidden">
                            <div className="w-[442px] h-[442px] rounded-full bg-primary-200/20 blur-[145px]"></div>
                            <div className="w-[442px] h-[442px] rounded-full bg-primary-200/25 -ml-[170px] blur-[145px]"></div>
                            <div className="w-[442px] h-[442px] rounded-full bg-primary-200/20 -ml-[170px] blur-[145px]"></div>
                        </div>
                        <div className=" bg-white dark:bg-dark-200 rounded-medium p-2.5  shadow-nav">
                            <div
                                className=" bg-white dark:bg-dark-200 border border-dashed rounded border-gray-100 dark:border-borderColour-dark p-12 max-md:p-5  "
                            >
                                <form>
                                    <div className="grid grid-cols-12 max-md:gap-y-10 md:gap-x-12 md:gap-8">
                                        <div className="max-md:col-span-full md:col-span-6">
                                            <label
                                                for="username"
                                                className="block text-sm font-medium font-jakarta_sans text-paragraph dark:text-white mb-2"
                                            >
                                                Your name
                                            </label>
                                            <input
                                                type="text"
                                                name="first-name"
                                                id="username"
                                                placeholder="Name"
                                                className="block w-full text-sm rounded-[48px] border border-borderColour dark:border-borderColour-dark py-2.5 px-5 text-paragraph-light placeholder:text-paragraph-light dark:placeholder:text-paragraph-light outline-none bg-white dark:bg-dark-200 focus:border-primary dark:focus:border-primary  duration-300 transition-all"
                                            />
                                        </div>
                                        <div className="max-md:col-span-full md:col-span-6">
                                            <label
                                                for="companyname"
                                                className="block text-sm font-medium font-jakarta_sans text-paragraph dark:text-white mb-2"
                                            >
                                                Comapny name
                                            </label>
                                            <input
                                                type="text"
                                                name="company-name"
                                                id="companyname"
                                                placeholder="Company Name"
                                                className="block w-full text-sm rounded-[48px] border border-borderColour dark:border-borderColour-dark py-2.5 px-5 text-paragraph-light placeholder:text-paragraph-light dark:placeholder:text-paragraph-light outline-none bg-white dark:bg-dark-200 focus:border-primary dark:focus:border-primary  duration-300 transition-all"
                                            />
                                        </div>
                                        <div className="max-md:col-span-full md:col-span-6">
                                            <label
                                                for="contactno"
                                                className="block text-sm font-medium font-jakarta_sans text-paragraph dark:text-white mb-2"
                                            >
                                                Contact No.
                                            </label>
                                            <input
                                                type="text"
                                                name="contact-number"
                                                id="contactno"
                                                placeholder="Contact Number"
                                                className="block w-full text-sm rounded-[48px] border border-borderColour dark:border-borderColour-dark py-2.5 px-5 text-paragraph-light placeholder:text-paragraph-light dark:placeholder:text-paragraph-light outline-none bg-white dark:bg-dark-200 focus:border-primary dark:focus:border-primary  duration-300 transition-all"
                                            />
                                        </div>
                                        <div className="max-md:col-span-full md:col-span-6">
                                            <label
                                                for="email"
                                                className="block text-sm font-medium font-jakarta_sans text-paragraph dark:text-white mb-2"
                                            >
                                                Your Email
                                            </label>
                                            <input
                                                type="email"
                                                name="first-name"
                                                id="email"
                                                placeholder="Email"
                                                className="block w-full text-sm rounded-[48px] border border-borderColour dark:border-borderColour-dark py-2.5 px-5 text-paragraph-light   placeholder:text-paragraph-light outline-none bg-white dark:bg-dark-200 focus:border-primary dark:focus:border-primary  duration-300 transition-all"
                                            />
                                        </div>
                                        <div className="col-span-full">
                                            <label
                                                for="message"
                                                className="block text-sm font-medium font-jakarta_sans text-paragraph dark:text-white mb-2"
                                            >
                                                Message
                                            </label>
                                            <textarea
                                                name="first-name"
                                                id="message"
                                                rows="10"
                                                className="block w-full text-sm rounded border border-borderColour dark:border-borderColour-dark py-2.5 px-5   text-paragraph-light placeholder:text-paragraph-light outline-none resize-none bg-white dark:bg-dark-200 focus:border-primary dark:focus:border-primary  duration-300 transition-all"
                                            ></textarea>
                                        </div>
                                        <div className="mx-auto col-span-full text-center">
                                            <button className="btn">Request Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="relative pb-25  max-md:overflow-hidden">
                <div className="container relative max-md:text-center">
                    <div className="absolute left-1/2 -bottom-[442px] -translate-x-1/2  flex max-md:flex-col -z-10 max-md:hidden">
                        <div
                            className="max-md:hidden max-1xl:w-[335px] max-1xl:h-[335px]  1xl:w-[442px] 1xl:h-[442px]  rounded-full bg-primary-200/20 blur-[145px]"
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
                    <div>
                        <div>
                            <p className="section-tagline">Start Today</p>
                        </div>
                        <div className="grid grid-cols-12 grid-y-10 items-start">
                            <div className="max-md:col-span-full md:col-span-6 lg:col-span-7">
                                <h2 className="mb-5 max-lg:text-[32px] text-[48px] font-semibold ">Start your free trial now!</h2>
                                <p>By creating a custom Web design for your business, we can bring your vision to life.</p>
                            </div>
                            <div className="max-md:col-span-full md:col-span-6 lg:col-span-5 max-md:mt-5 ">
                                <form>
                                    <div className="grid grid-cols-12 items-center max-lg:gap-y-5 lg:gap-x-6 ">
                                        <input
                                            type="text"
                                            placeholder="Enter your email"
                                            className="bg-transparent placeholder:text-light dark:placeholder:text-[#A1A49D] text-[#A1A49D] text-light focus:outline-none  leading-[1.5] border rounded-[60px] bg-white dark:bg-dark-200 dark:border-[#31332F] border-borderColour max-lg:col-span-full lg:col-span-8 h-full ps-5 max-lg:py-3.5 focus:border-primary dark:focus:border-primary  duration-300 transition-all outline-none"
                                        />
                                        <button className="btn max-lg:col-span-full lg:col-span-4">Get Started</button>
                                    </div>
                                </form>
                                <ul className=" flex max-md:flex-col max-lg:gap-y-2.5 items-center max-lg:justify-between lg:gap-5 mt-6 ">
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
                                        <p>No Credit Card Required</p>
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

export default RequestDemo