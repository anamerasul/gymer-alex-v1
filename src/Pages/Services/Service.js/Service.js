import React from 'react';
import { NavLink } from 'react-router-dom'

const Service = (props) => {

    console.log(props);

    const { name, subtitle, image, id } = props.service
    return (
        // <div className="shadow-lg">

        //     <div className="shadow-lg">
        //         <h2 className=" py-10 text-center text-3xl font-bold text-green-400">{service?.name}</h2>
        //         <img className="mx-auto rounded-box" src={service?.image} alt="" />

        //         <p className='text-white text-center mx-auto px-40'>{service?.subtitle}</p>
        //         <button className="text-center ml-8 md:ml-[300px]  text-white px-4 rounded-md bg-blue-600" to="/contact">Contact</button>
        //     </div>


        // </div>

        <div className="transform bg-[#191f2e] hover:-translate-y-3 to-hover hover:bg-gray-800 text-center secondary-bg transition duration-300 rounded w-full shadow-lg mx-auto">
            <img className="mx-auto py-10   rounded-t" src={image} alt="" />
            <h1 className="px-5 pt-5 text-2xl font-bold text-blue-500">{name}</h1>
            <h2 className="px-5 pt-5 text-gray-200">{subtitle}</h2>
            <NavLink
                to={`/services/${id}`}
            ><button className="px-8 py-3 mt-10 mb-8 bg-blue-600 text-white rounded hover:bg-white hover:text-gray-800 transition duration-300">VIEW DETAILS</button></NavLink>
        </div>


    );
};

export default Service;