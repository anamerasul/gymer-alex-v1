import React from 'react';
import useSliderData from '../../../Hooks/useSliderData';
import 'bootstrap/dist/css/bootstrap.min.css'

import "./slider.module.css"

import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Slider = () => {

    const [sliderData] = useSliderData([])
    return (
        <div className="mt-[-16px]">
            <Carousel>
                {
                    sliderData.map(data =>


                        <Carousel.Item data={data}>
                            <img
                                className="d-block w-100"
                                src={data.image}
                                alt="First slide"
                            />
                            <Carousel.Caption className='absolute bottom-2 lg:top-2 lg:mt-[350px]  lg:mr-[800px]'>
                                <h3>{data.caption}</h3>
                                <Link className="bg-green-600 text-blue-200 px-4 py-1 rounded-full hover:text-white hover:bg-black" to="/contact">Contact me</Link>
                            </Carousel.Caption>
                        </Carousel.Item>)}
            </Carousel>

        </div>
    );
};

export default Slider;