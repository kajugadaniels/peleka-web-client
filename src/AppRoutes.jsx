import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserLayout from './layouts/UserLayout';
import { About, Contact, GetRiderDetails, GetRiders, Home, Login, RequestDemo, Services } from './pages'

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<UserLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/riders" element={<GetRiders />} />
                <Route path="/rider/:id" element={<GetRiderDetails />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/request-demo" element={<RequestDemo />} />

                <Route path="/login" element={<Login />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
