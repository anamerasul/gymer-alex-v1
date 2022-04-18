import React from 'react';
import HomeServices from '../../../Components/HomeServices/HomeServices';
import Slider from '../../../Components/Slider/Slider';
import Testimonial from '../../../Components/Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <HomeServices></HomeServices>
            <Testimonial></Testimonial>

        </div>
    );
};

export default Home;