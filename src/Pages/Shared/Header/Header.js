import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdLegendToggle } from 'react-icons/md';

import CustomLink from '../../../Components/CustomLink/CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Header.css'
import auth from '../../../Firebase/firebase.init';
const Header = () => {

    const [user] = useAuthState(auth);
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <header className=''>
            <>
                <nav className="flex flex-wrap items-center sticky justify-between px-2 py-3 top-0 bg-gray-800 from-yellow-700 shadow-lg  text-white mb-3">
                    <div className="container px-4 mx-auto flex flex-wrap items-center justify-between sm:justify-center">
                        <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
                            <Link to='/'
                                className="text-xl md:text-4xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-fuchsia-300 md:text-yellow-600 "
                            >
                                <span className="text-blue-400 md:text-red-700">Gymer</span> <span className="text-white">Alex</span>
                                {/* <img className="h-12" src={logo} alt="logo" /> */}
                            </Link>
                            <button
                                className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
                                type="button"
                                onClick={() => setNavbarOpen(!navbarOpen)}
                            >
                                <MdLegendToggle ></MdLegendToggle>
                            </button>
                        </div>



                        <div
                            className={
                                "md:flex flex-grow items-center" +
                                (navbarOpen ? " flex" : " hidden")
                            }
                            id="example-navbar-danger"
                        >


                            <ul className="flex flex-col md:flex-row list-none  sm:ml-auto">



                                <li className="nav-item">
                                    <CustomLink className="px-3 py-2 flex items-center uppercase" to='/'>HOME</CustomLink>
                                </li>
                                <li className="nav-item">
                                    <CustomLink className="px-3 py-2 flex items-center uppercase" to='/about'>About me</CustomLink>
                                </li>
                                <li className="nav-item">
                                    <CustomLink className="px-3 py-2 flex items-center uppercase" to='/services'>Services</CustomLink>
                                </li>
                                <li className="nav-item">
                                    <CustomLink className="px-3 py-2 flex items-center uppercase" to='/blogs'>Blogs</CustomLink>
                                </li>





                                {

                                    user?.uid ? '' : <li className="nav-item">
                                        <CustomLink className="px-3 py-2 flex items-center uppercase" to='/login'>Login</CustomLink>

                                    </li>
                                }
                                {

                                    user?.uid ? '' : <li className="nav-item">
                                        <CustomLink className="px-3 py-2 flex items-center uppercase" to='/signup'>Signup</CustomLink>

                                    </li>
                                }



                                {

                                    user?.uid ? <li className="nav-item">
                                        <CustomLink className="px-2 py-2 mr-2  rounded-pill marker: flex items-center uppercase" to='/logout'>Logout</CustomLink>

                                    </li> : " "
                                }


                                {

                                    user?.uid ? <li className="nav-item">
                                        <CustomLink className="px-3 py-2 flex border-2 items-center uppercase" to='/update'>{user?.displayName}</CustomLink>
                                    </li> : ''
                                }


                                {user?.displayName && <img className="h-[45px] w-[45px] " style={{ "borderRadius": "50%" }} src={user?.photoURL} alt="" />}
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        </header>
    );
};

export default Header;