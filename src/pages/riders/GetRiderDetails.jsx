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
        <div>GetRiderDetails</div>
    )
}

export default GetRiderDetails