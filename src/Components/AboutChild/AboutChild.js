import React from 'react';

const AboutChild = (props) => {
    const { title, description, image } = props.data
    return (


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <div className="my-4" >
                <img src={image} alt="img" />
            </div>
            <div>
                <p className='mt-10 mb-3 font-semibold text-gray-100'>
                    {title} </p>
                <p className='text-gray-100'>
                    {description}
                </p>
            </div>

        </div>


    );
};

export default AboutChild;