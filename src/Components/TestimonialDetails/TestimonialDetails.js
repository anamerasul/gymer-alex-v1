import React from 'react';

const TestimonialDetails = (props) => {

    const { image, name, subtitle } = props.data
    return (
        <div className="transform bg-[#191f2e] hover:-translate-y-3 to-hover hover:bg-gray-800 text-center py-10 secondary-bg transition duration-300 rounded w-full shadow-lg mx-auto">
            <img className="mx-auto py-10   rounded-t" src={image} alt="" />
            <h1 className="px-5 pt-5 text-2xl font-bold text-blue-500">{name}</h1>
            <h2 className="px-5 pt-5 text-gray-200">{subtitle}</h2>
        </div>

    );
};

export default TestimonialDetails;