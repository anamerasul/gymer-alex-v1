import React from 'react';
import useTestimonialData from '../../Hooks/useTestimonialData';
import TestimonialDetails from '../TestimonialDetails/TestimonialDetails';

const Testimonial = () => {
    const [testmonials] = useTestimonialData([])

    return (
        <div className="container mx-auto px-8 my-20">

            <h3 className="text-center text-4xl text-blue-600 font-bold my-10">Previous Client</h3>


            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                {

                    testmonials.map(data => <TestimonialDetails
                        key={data.id}
                        data={data}
                    ></TestimonialDetails>)
                }

            </div>



        </div>
    );
};

export default Testimonial;