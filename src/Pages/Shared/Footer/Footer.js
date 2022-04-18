import React, { useEffect, useState } from 'react';
import { BsFacebook, BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';
const Footer = () => {
    const [date, setDate] = useState();

    const getYear = () => setDate(new Date().getFullYear())

    useEffect(() => {
        getYear()
    }, [])


    return (
        <footer className='bg-gray-900  py-4 mt-8 md:mt-24'>
            <div className='max-w-screen-xl mx-auto px-4'>
                <div className=' flex max-w-xs mx-auto items-center justify-evenly md:justify-between'>
                    <a
                        href='https://facebook.com/sparkgears'
                        className='text-white'
                    >
                        <BsFacebook className='text-xl hover:text-blue-800 transition-colors duration-200'></BsFacebook>
                    </a>
                    <a
                        href='https://twitter.com/MdChowdhuray'
                        className='text-white '
                    >

                        <BsTwitter className='text-xl hover:text-blue-500 transition-colors duration-200'></BsTwitter>
                    </a>
                    <a
                        href='https://github.com/anamerasul'
                        className='text-white'
                    >
                        <BsGithub className='text-xl hover:text-gray-200 transition-colors duration-200'></BsGithub>
                    </a>
                    <a
                        href='https://www.linkedin.com/in/anamerasul/'
                        className='text-white'
                    >
                        <BsLinkedin className='text-xl hover:text-blue-500 transition-colors duration-200'></BsLinkedin>
                    </a>


                </div>
                <div className='text-center text-white pt-4 sm:pt-8 font-light flex items-center justify-center'>
                    All Rights Reserved By &copy; <span className="text-blue-400 md:text-red-700 mx-1">Gymer-</span> <span className="text-white">-Alex</span>  <span className="mx-2">||</span>

                    <span className="mx-2">{date}</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;