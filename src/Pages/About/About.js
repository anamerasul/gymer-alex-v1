import React from 'react';
import AboutChild from '../../Components/AboutChild/AboutChild';
import useAboutDataHooks from '../../Hooks/useAboutDataHooks';

const About = () => {

    const [about] = useAboutDataHooks([])
    return (


        <section className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
            <div className=''>
                <div>



                    <h1 className='mb-6 text-2xl  text-gray-100 text-center md:text-4xl font-bold'>
                        About Me
                    </h1>

                    <div className='grid-cols-1 gap-4'>

                        {

                            about.map(data =>

                                <AboutChild
                                    key={data.id}
                                    data={data}
                                ></AboutChild>
                            )
                        }

                    </div>



                </div>
            </div>
        </section >
    );
};

export default About;