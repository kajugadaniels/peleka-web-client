import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../api'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            toast.info('You have been logged out.');
        }
    }, []);

    const validateForm = () => {
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            toast.error('Email is required.');
            return false;
        }
        if (!emailRegex.test(email)) {
            toast.error('Please enter a valid email address.');
            return false;
        }

        // Password validation
        if (!password) {
            toast.error('Password is required.');
            return false;
        }
        if (password.length < 8) {
            toast.error('Password must be at least 8 characters long.');
            return false;
        }

        return true;
    };

    const handleLogin = async (e) => {
        e.preventDefault();
    
        if (!validateForm()) return;
    
        setLoading(true);
    
        try {
            const { success, data, message } = await login(email, password);
    
            if (success) {
                toast.success('Login successful! Redirecting to your dashboard...');
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify(data.user));
                navigate('/');
            } else {
                toast.error(message || 'Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('Login Error:', error); // Log the entire error object for debugging
    
            // Display a detailed error message if available
            if (error.response) {
                // If the server provided a detailed error response, display it
                const errorData = error.response.data;
                const errorMessage = errorData.message || JSON.stringify(errorData);
                toast.error(`Error: ${errorMessage}`);
            } else {
                // Generic error message for unexpected issues
                toast.error('An unexpected error occurred during login. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="pt-[200px] mb-150 max-md:mb-25 relative">
            <div className="absolute left-1/2 top-25 w-full h-[550px] -translate-x-1/2 bg-cover bg-[url('https://aplio.vercel.app/images/hero-gradient.png')] bg-no-repeat bg-center opacity-70 md:hidden -z-10"></div>
            <div
                className="container relative"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-duration="1000"
                data-aos-once="true"
            >
                <div className="mb-12 text-center max-w-[475px] mx-auto">
                    <p className="section-tagline">Login</p>
                    <h2>Login to your <br /> account</h2>
                </div>
                <div className="relative z-10 max-w-[510px] mx-auto">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex max-md:flex-col -z-10 max-md:hidden">
                        <div className="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/30 blur-[145px]"></div>
                        <div className="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/50 -ml-[170px] max-md:ml-0 blur-[145px]"></div>
                        <div className="max-1xl:w-[335px] max-1xl:h-[335px] 1xl:w-[442px] 1xl:h-[442px] rounded-full bg-primary-200/30 -ml-[170px] max-md:ml-0 blur-[145px]"></div>
                    </div>
                    <div className="bg-white dark:bg-dark-200 rounded-medium p-2.5 shadow-nav">
                        <div className="bg-white dark:bg-dark-200 border border-dashed rounded border-gray-100 dark:border-borderColour-dark p-12 max-md:px-5 max-md:py-7">
                            <form onSubmit={handleLogin}>
                                <div className="grid grid-cols-12 gap-y-6">
                                    <div className="col-span-12">
                                        <label htmlFor="email" className="block text-sm font-medium font-jakarta_sans text-paragraph dark:text-white mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Email address"
                                            className="block w-full text-sm rounded-[48px] border border-borderColour dark:border-borderColour-dark py-3.5 px-5 text-paragraph-light placeholder:text-paragraph-light dark:placeholder:text-paragraph-light outline-none bg-white dark:bg-dark-200 focus:border-primary dark:focus:border-primary duration-300 transition-all"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="password" className="block text-sm font-medium font-jakarta_sans text-paragraph dark:text-white mb-2">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder="At least 8 character"
                                            className="block w-full text-sm rounded-[48px] border border-borderColour dark:border-borderColour-dark py-3.5 px-5 text-paragraph-light placeholder:text-paragraph-light outline-none bg-white dark:bg-dark-200 focus:border-primary dark:focus:border-primary duration-300 transition-all"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="col-span-full flex items-center justify-between">
                                        <label htmlFor="remember-me" className="flex items-center gap-x-3">
                                            <input
                                                id="remember-me"
                                                type="checkbox"
                                                className="sr-only peer"
                                            />
                                            <div className="w-5 h-5 rounded-full border border-borderColour dark:border-borderColour-dark relative after:absolute after:w-2.5 after:h-2.5 after:bg-primary after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:opacity-0 peer-checked:after:opacity-100 peer-checked:border-primary dark:peer-checked:border-primary cursor-pointer"></div>
                                            <span className="block text-sm font-medium text-paragraph dark:text-white font-jakarta_sans">
                                                Remember me
                                            </span>
                                        </label>
                                        <a
                                            href="/forgetpassword"
                                            className="relative font-jakarta_sans inline-block overflow-hidden text-sm font-medium text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] hover:before:origin-left hover:before:scale-x-100 leading-[24px] align-bottom"
                                        >
                                            Forget Password
                                        </a>
                                    </div>
                                    <div className="col-span-full">
                                        <button
                                            type="submit"
                                            className="btn w-full block font-medium"
                                            disabled={loading}
                                        >
                                            {loading ? 'Logging In...' : 'Login'}
                                        </button>
                                    </div>
                                    <div className="col-span-full">
                                        <p className="text-sm font-medium text-center font-jakarta_sans leading-[24px]">
                                            Not registered yet?{' '}
                                            <Link to="/register" className="relative font-jakarta_sans inline-block overflow-hidden text-sm font-medium text-paragraph dark:text-white before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-right before:scale-x-0 before:bg-paragraph dark:before:bg-white before:transition-transform before:duration-500 before:content-[''] hover:before:origin-left hover:before:scale-x-100 leading-[24px] align-bottom">
                                                Create an Account
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
