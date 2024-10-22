import React from 'react'

const About = () => {
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
                        <p className="mb-4 font-medium uppercase">About Peleka</p>
                        <h1 className="max-lg:mb-10 mb-10">Revolutionizing Delivery for Small Businesses</h1>
                        <p className="max-lg:mb-10 mb-12 max-w-[590px] mx-auto">
                            At Peleka, we empower small businesses to elevate their delivery game. Our app connects you directly with reliable motorbike couriers, allowing you to focus on what you do best—serving your customers. Whether it’s food, shoes, or any other goods, we ensure your products reach your clients swiftly and safely. Join us in shaping the future of logistics and experience seamless deliveries like never before!
                        </p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default About