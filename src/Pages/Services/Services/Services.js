import React from 'react';
import UseServiceData from '../../../Hooks/UseServiceData';
import Service from '../../../Components/Service/Service';

const Services = () => {

    const [services] = UseServiceData([])


    return (
        <div className="container mx-auto px-4">

            <h2 className="text-4xl pb-4 text-blue-500 font-bold text-center my-5 ">My services</h2>

            <p className="text-sm text-blue-100 font-bold text-center my-5">see services</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">



                {services.map(service => <Service
                    key={service.id}
                    service={service}
                ></Service>)}
            </div>

        </div>
    );
};

export default Services;