import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <>
            <section className="hero  overflow-hidden relative max-lg:pt-150 pt-[240px] pb-[60px] z-40">
                <div className="container">
                    <div
                        className="max-w-[948px] mx-auto text-center"
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-duration="1000"
                        data-aos-once="true"
                    >
                        <p className="mb-4 font-medium uppercase">Get in touch</p>
                        <h1 className="max-lg:mb-10 mb-10">Contact our help desk for assistance</h1>
                        <p className="max-lg:mb-10 mb-12 max-w-[590px] mx-auto">Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin, though it looks like it</p>
                    </div>
                </div>
            </section>


            <section className=" pb-150 relative">
                <div
                    className="absolute left-1/2 -top-[250px] w-full h-[550px] -translate-x-1/2 bg-cover  bg-[url('https://aplio.vercel.app/images/hero-gradient.png')] bg-no-repeat bg-center opacity-70 md:hidden -z-10"
                ></div>
                <div className="container ">
                    <div className="relative z-10">
                        <div className="absolute left-1/2 top-20 -translate-x-1/2 -translate-y-1/2 flex max-md:flex-col -z-10 max-md:hidden">
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
                        <div className=" grid grid-cols-3 max-md:grid-cols-1 gap-8">
                            <div
                                className="bg-white dark:bg-dark-200 shadow-box rounded-medium p-2.5"
                                data-aos="fade-up"
                                data-aos-offset="200"
                                data-aos-duration="1000"
                                data-aos-once="true"
                            >
                                <div
                                    className="border border-dashed rounded border-gray-100 dark:border-borderColour-dark p-10 h-full max-lg:p-5 text-center "
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="40"
                                        height="40"
                                        viewBox="0 0 40 40"
                                        fill="none"
                                        className="inline-block mb-6"
                                    >
                                        <path
                                            d="M24.1641 30.002H15.8359C14.4609 30.002 13.3359 28.8772 13.3359 27.5024V19.1681C13.3359 17.7934 14.4609 16.6686 15.8359 16.6686H24.1719C25.5469 16.6686 26.6719 17.7934 26.6719 19.1681V27.5024C26.6641 28.8772 25.5469 30.002 24.1641 30.002ZM15.8359 18.3324C15.375 18.3324 15 18.7073 15 19.1681V27.5024C15 27.9633 15.375 28.3382 15.8359 28.3382H24.1719C24.6328 28.3382 25.0078 27.9633 25.0078 27.5024V19.1681C25.0078 18.7073 24.6328 18.3324 24.1719 18.3324H15.8359ZM32.5 40H7.5C3.36719 40 0 36.6335 0 32.5015V15.9344C0 13.4427 1.23438 11.115 3.30469 9.71685L15.8047 1.281C18.3516 -0.437416 21.6484 -0.437416 24.1953 1.281L36.6953 9.71685C38.7656 11.115 40 13.4349 40 15.9344V32.4937C40 36.6335 36.6328 40 32.5 40ZM20 1.66374C18.8672 1.66374 17.7266 1.99961 16.7422 2.67135L4.24219 11.0994C2.63281 12.1851 1.67188 13.9895 1.67188 15.9344V32.4937C1.67188 35.7118 4.28906 38.3285 7.50781 38.3285H32.5078C35.7266 38.3285 38.3438 35.7118 38.3438 32.4937V15.9344C38.3438 13.9895 37.3828 12.1851 35.7734 11.0994L23.2734 2.66354C22.2734 1.99961 21.1328 1.66374 20 1.66374Z"
                                            fill=""
                                            className="fill-paragraph dark:fill-white"
                                        />
                                    </svg>
                                    <h3 className="mb-2.5">Our Address</h3>
                                    <p>Kigali Rwanda</p>
                                </div>
                            </div>

                            <div
                                className="bg-white dark:bg-dark-200 shadow-box rounded-medium p-2.5"
                                data-aos="fade-up"
                                data-aos-offset="200"
                                data-aos-duration="1000"
                                data-aos-delay="300"
                                data-aos-once="true"
                            >
                                <div
                                    className="border border-dashed rounded border-gray-100 dark:border-borderColour-dark p-10 h-full max-lg:p-5 text-center"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="40"
                                        height="40"
                                        viewBox="0 0 40 40"
                                        fill="none"
                                        className="inline-block mb-6"
                                    >
                                        <path
                                            d="M37.7031 15.4297L35 12.8281V5.83594C35 2.61719 32.3828 0 29.1641 0H10.8359C7.61719 0 5 2.61719 5 5.83594V12.8281L2.29688 15.4375C0.835937 16.8438 0 18.8047 0 20.8359V32.5C0 36.6328 3.36719 40 7.5 40H32.5C36.6328 40 40 36.6328 40 32.5V20.8359C40 18.8047 39.1641 16.8438 37.7031 15.4297ZM36.5469 16.6328C36.7031 16.7812 36.8438 16.9375 36.9766 17.1016L35 19.0781V15.1328L36.5469 16.6328ZM6.66406 5.83594C6.66406 3.53906 8.53125 1.67188 10.8281 1.67188H29.1641C31.4609 1.67188 33.3281 3.53906 33.3281 5.83594V20.75L24.125 29.9609C21.9219 32.1641 18.0781 32.1641 15.875 29.9609L6.66406 20.75V5.83594ZM3.45312 16.6328L5 15.1406V19.0859L3.01562 17.1016C3.15625 16.9375 3.29688 16.7812 3.45312 16.6328ZM38.3359 32.5C38.3359 35.7188 35.7188 38.3359 32.5 38.3359H7.5C4.28125 38.3359 1.66406 35.7188 1.66406 32.5V20.8359C1.66406 20.0547 1.82031 19.2812 2.125 18.5703L14.6953 31.1406C16.1094 32.5547 17.9922 33.3359 20 33.3359C22.0078 33.3359 23.8828 32.5547 25.3047 31.1406L37.875 18.5703C38.1719 19.2812 38.3359 20.0547 38.3359 20.8359V32.5ZM11.6641 9.16406C11.6641 8.70312 12.0391 8.32812 12.5 8.32812H27.5C27.9609 8.32812 28.3359 8.70312 28.3359 9.16406C28.3359 9.625 27.9609 10 27.5 10H12.5C12.0391 10 11.6641 9.625 11.6641 9.16406ZM11.6641 15.8359C11.6641 15.375 12.0391 15 12.5 15H24.1641C24.625 15 25 15.375 25 15.8359C25 16.2969 24.625 16.6719 24.1641 16.6719H12.5C12.0391 16.6641 11.6641 16.2969 11.6641 15.8359Z"
                                            fill=""
                                            className="fill-paragraph dark:fill-white"
                                        />
                                    </svg>
                                    <h3 className="mb-2.5">Email Us</h3>
                                    <Link to="mailto:info@peleka.com"> info@peleka.com </Link>
                                </div>
                            </div>

                            <div
                                className="bg-white dark:bg-dark-200 shadow-box rounded-medium p-2.5"
                                data-aos="fade-up"
                                data-aos-offset="200"
                                data-aos-duration="1000"
                                data-aos-delay="600"
                                data-aos-once="true"
                            >
                                <div
                                    className="border border-dashed rounded border-gray-100 dark:border-borderColour-dark p-10 h-full max-lg:p-5 text-center"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="40"
                                        height="40"
                                        viewBox="0 0 40 40"
                                        fill="none"
                                        className="inline-block mb-6"
                                    >
                                        <path
                                            d="M37.0899 2.93026L35.2227 1.29713C33.5196 -0.406328 30.6367 -0.484468 28.8008 1.38308L25.6836
                                            5.46982C23.9336 7.22016 23.9336 10.0723 25.6836 11.807L28.168 14.3544C25.4649 20.6915 20.4883 25.6925
                                            14.3477 28.193L11.8008 25.7003C10.9492 24.8486 9.83206 24.3798 8.63675 24.3798C7.44143 24.3798 6.31643
                                            24.8486 5.55081 25.63L1.31643 28.8963C-0.433567 30.6466 -0.433567 33.4987 1.28518 35.1944L2.98831
                                            37.1479C4.82425 38.9842 7.28518 40 9.97268 40C22.8867 40 40.0039 22.8638 40.0039 9.96288C40.0039 7.2983
                                            38.9883 4.81344 37.1211 2.94589L37.0899 2.93026ZM9.93362 38.32C7.69924 38.32 5.65237 37.4839 4.16799
                                            35.9992L2.46487 34.0301C1.36331 32.9283 1.36331 31.1467 2.37893 30.1153L6.61331 26.849C7.14456 26.3176
                                            7.84768 26.0129 8.61331 26.0129C9.37893 26.0129 10.0821 26.3098 10.6133 26.849L13.5664 29.7324C13.8008
                                            29.9668 14.1367 30.0293 14.4492 29.9121C21.4024 27.2631 27.0508 21.6136 29.9336 14.4403C30.0508 14.1434
                                            29.9805 13.7918 29.7539 13.5417L26.8711 10.588C25.7696 9.48623 25.7696 7.70463 26.9414 6.5169L30.0586
                                            2.43016C31.1602 1.32839 32.9414 1.32839 34.0899 2.46142L35.9571 4.09455C37.4727 5.61047 38.3086 7.66556
                                            38.3086 9.89256C38.3086 21.8246 21.8789 38.2653 9.94143 38.2653L9.93362 38.32Z"
                                            fill=""
                                            className="fill-paragraph dark:fill-white"
                                        />
                                    </svg>
                                    <h3 className="mb-2.5">Call Us</h3>
                                    <Link to="tel:+250788888888">+250 788 888 888</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="mb-150 relative">
                <div
                    className="absolute left-1/2  w-full h-[550px] -translate-x-1/2 bg-cover  bg-[url('https://aplio.vercel.app/images/hero-gradient.png')] bg-no-repeat bg-center opacity-70 md:hidden -z-10"
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

                        <h2>Let us know how we can assist you</h2>
                    </div>
                    <div className="relative z-10 max-w-[850px] mx-auto">
                        <div
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex -z-10 max-lg:max-w-full max-md:hidden"
                        >
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
                                            <button className="btn">Contact Now</button>
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

export default Contact