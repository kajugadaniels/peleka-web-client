import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { fetchRiders } from '../../api'
import { toast } from 'react-toastify'

const GetRiders = () => {
    const [riders, setRiders] = useState([]);
    const [filteredRiders, setFilteredRiders] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [ridersPerPage] = useState(10);
    const [loading, setLoading] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const loadRiders = async () => {
            setLoading(true);
            try {
                const data = await fetchRiders();
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

    return (
        <section className="hero  overflow-hidden relative max-lg:pt-150 pt-[240px] pb-[60px] z-40">
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


    )
}

export default GetRiders