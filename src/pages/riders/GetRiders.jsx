import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getRiders } from '../../api'
import { toast } from 'react-toastify'

const GetRiders = () => {
    const [riders, setRiders] = useState([]);
    const [filteredRiders, setFilteredRiders] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const loadRiders = async () => {
            setLoading(true);
            try {
                const data = await getRiders();
                setRiders(data);
                setFilteredRiders(data);
            } catch (error) {
                toast.error('Failed to load riders.');
            } finally {
                setLoading(false);
            }
        };
        loadRiders();
    }, []);

    const handleView = (riderId) => {
        navigate(`/rider/${riderId}`);
    };

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
                        <p className="mb-4 font-medium uppercase">Our leading, strong and creative team</p>
                        <h1 className="max-lg:mb-10 mb-10">Our Riders</h1>
                        <p className="max-lg:mb-10 mb-12 max-w-[590px] mx-auto">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-white dark:bg-dark-300 pb-[170px] max-md:pb-25 relative z-10 ">
                <div className="absolute left-1/2 -top-[200px] w-full h-[550px] -translate-x-1/2 bg-cover  bg-[url('https://aplio.vercel.app/https://aplio.vercel.app/images/team/team1.png')] bg-no-repeat bg-center opacity-70 md:hidden -z-10"></div>
                {loading ? (
                    <div className="py-5 text-center">Loading riders...</div>
                ) : (
                    <div className="container">
                        <div className="relative z-10">
                            {/* ... any additional code ... */}
                            <div className="grid grid-cols-3 max-md:grid-cols-1 max-lg:grid-cols-2 gap-8 max-md:gap-y-15">
                                {filteredRiders.map((rider) => (
                                    <div
                                        data-aos="fade-up"
                                        data-aos-offset="200"
                                        data-aos-duration="1000"
                                        data-aos-delay=""
                                        data-aos-once="true"
                                        className="group/image"
                                        key={rider.id}
                                    >
                                        <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 mb-6">
                                            <div className="rounded bg-gray-100 dark:bg-[#30302F] overflow-hidden">
                                                <img
                                                    src="https://aplio.vercel.app/images/team/team1.png"
                                                    alt={rider.name}
                                                    className="grayscale group-hover/image:grayscale-0 duration-300 transition-all"
                                                />
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <button onClick={() => handleView(rider.id)}>
                                                <h3 className="mb-2">
                                                    {rider.name}
                                                </h3>
                                            </button>
                                            <p className="text-sm font-medium leading-[1.5] mb-6">
                                                #{rider.code}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </>
    )
}

export default GetRiders
