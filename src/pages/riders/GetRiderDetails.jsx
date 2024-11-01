import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { fetchRiderById } from '../../api';
import { toast } from 'react-toastify';

const GetRiderDetails = () => {
    const { id } = useParams(); // Get the rider ID from URL parameters
    const [riderData, setRiderData] = useState({
        id: '',
        name: '',
        phone_number: '',
        address: '',
        code: '',
        nid: '',
    });
    const [loading, setLoading] = useState(true); // Set loading to true initially
    const navigate = useNavigate();

    useEffect(() => {
        const loadRiderDetails = async () => {
            try {
                const data = await fetchRiderById(id);
                setRiderData(data);
            } catch (error) {
                toast.error('Failed to load rider details.');
                navigate('/riders');
            } finally {
                setLoading(false); // Stop loading once data is fetched
            }
        };

        loadRiderDetails();
    }, [id, navigate]);

    if (loading) {
        return (
            <div className="mt-16 px-5">
                <div className="container">
                    <div className="text-center py-10">Loading rider details...</div>
                </div>
            </div>
        );
    }

    return (
        <div class="container mb-150 pt-[250px] max-md:pt-150 relative">
            <div class="absolute left-1/2 top-[200px] w-full h-[550px] -translate-x-1/2 bg-cover  bg-[url('../images/hero-gradient.png')] bg-no-repeat bg-center opacity-70 md:hidden -z-10"></div>
            <div class="grid grid-cols-2 max-md:grid-cols-1 gap-20 max-w-[800px] mx-auto relative auto-rows-min ">
                <div class="absolute left-1/2 top-[37%] -translate-x-1/2 -translate-y-1/2 flex max-md:flex-col -z-10 max-md:hidden">
                    <div
                        class="max-1xl:w-[335px] max-1xl:h-[335px]  1xl:w-[442px] 1xl:h-[442px]  rounded-full bg-primary-200/30 blur-[145px]"
                    ></div>
                    <div
                        class="max-1xl:w-[335px] max-1xl:h-[335px]  1xl:w-[442px] 1xl:h-[442px]  rounded-full bg-primary-200/50 -ml-[170px] max-md:ml-0 blur-[145px]"
                    ></div>
                    <div
                        class="max-1xl:w-[335px] max-1xl:h-[335px]  1xl:w-[442px] 1xl:h-[442px]  rounded-full bg-primary-200/30 -ml-[170px] max-md:ml-0 blur-[145px]"
                    ></div>
                </div>
                <div
                    class="bg-white dark:bg-dark-200 rounded-medium p-2.5  shadow-box self-start"
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-duration="1000"
                    data-aos-once="true"
                >
                    <div class=" rounded bg-gray-100 dark:bg-[#30302F]">
                        <img
                            src="https://aplio.vercel.app/images/team/teamSingle.png"
                            alt={riderData.name}
                            class="object-cover object-bottom"
                        />
                    </div>
                </div>
                <div>
                    <div class="mb-12">
                        <p class="section-tagline">
                            {riderData.code}
                        </p>
                        <h1 class="mb-12 text-[48px] font-bold">
                            {riderData.name}
                        </h1>
                    </div>
                    <div class="mb-12 flex items-center">
                        <a href="tel:{rider.phone_number}">
                            {riderData.phone_number}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetRiderDetails