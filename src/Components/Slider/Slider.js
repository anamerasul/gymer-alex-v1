import React from 'react';

import "./slider.module.css"
import { NavLink } from 'react-router-dom';

const Slider = () => {
    return (
        <div className="bg-[#2d2f33] text-white App">
            <section className="container mx-auto text-left px-10 py-6 md:py-40">
                <div className="flex items-center justify-between flex-col lg:flex-row">
                    <div className="order-2 sm:order-1 ml-16 sm:ml-0">
                        <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold my-10 leading-normal"> Healthy Body - Healthy Life!
                        </h1>
                        <p className="">Fit With Coach. and reach Your Potential!</p>
                        <button
                            className="px-8 py-3 mt-10 bg-blue-600 rounded hover:bg-white hover:text-gray-700 text-gray-200 transition duration-300 "><NavLink to="/services">LET'S START</NavLink></button>
                    </div>
                    <div className="order-1 sm:order-2">
                        <img className="rounded" src="https://i.ibb.co/8jZ2TH0/slider-1-slide-1-removebg-preview.png" alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Slider;