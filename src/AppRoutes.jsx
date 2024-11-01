import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserLayout from './layouts/UserLayout';
import { About, Contact, GetRiders, Home, RequestDemo, Services } from './pages'

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<UserLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/riders" element={<GetRiders />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/request-demo" element={<RequestDemo />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
