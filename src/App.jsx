import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AppRoutes from './AppRoutes'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './assets/css/app.css'

const App = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <Router>
            <AppRoutes />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop
                closeOnClick
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
                theme="light"
            />
        </Router>
    )
}

export default App
