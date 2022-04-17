import React from 'react';
import UseServiceData from '../../../Hooks/UseServiceData';
import Service from '../Service.js/Service';

const Services = () => {

    const [services] = UseServiceData([])


    return (
        <div>

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