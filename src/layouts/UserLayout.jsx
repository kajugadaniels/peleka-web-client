import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from '../components'

const UserLayout = () => {
    return (
        <div className='relative text-base antialiased bg-white dark:bg-dark-300 font-Inter'>
            <div
                className="top-nav fixed top-0 left-0 w-full py-2 text-center duration-500 transition-all origin-top scale-y-100 bg-primary z-10"
                id="top-nav"
            >
                <p className="max-lg:text-sm text-paragraph dark:text-paragraph font-medium text-white">
                    Until recently, the prevailing view assumed
                </p>
            </div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default UserLayout