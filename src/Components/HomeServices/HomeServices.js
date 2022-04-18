import React from 'react';
import UseServiceData from '../../Hooks/UseServiceData';
import Service from '../Service/Service';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomeServices = () => {

    const [services] = UseServiceData([])
    return (
        <div className="container mx-auto">

            <div className="text-center py-2 md:py-10">
                <h2 className="text-4xl pb-4 text-blue-500 font-bold ">My services</h2>

                <p className="text-sm text-blue-100 font-bold">see services</p>

            </div>




            <motion.div
                exit={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 px-10 ">

                    {
                        services.slice(0, 3).map(service => <Service
                            key={service.id}
                            service={service}

                        ></Service>)
                    }

                </div>

                <div className="mx-auto text-center my-6">
                    <Link className="px-8 py-3 mt-10 mb-8 bg-blue-600 text-white rounded hover:bg-white hover:text-gray-800 transition duration-30 " to='/services'>Explore More</Link>
                </div>
            </motion.div>









        </div>
    );
};

export default HomeServices;