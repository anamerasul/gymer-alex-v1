import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
const DetailsService = () => {

    const [services, setServices] = useState([])



    const [singleService, setSingleService] = useState([]);

    let { id } = useParams()


    //  LOADING DATA
    useEffect(() => {

        const url = `/services.json`
        fetch(url)
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);


    // eslint-disable-next-line
    useEffect(() => {
        const foundService = services.find(
            (service) => service.id === id
        );
        setSingleService(foundService);
    }, [services]);


    return (
        <div className="App">
            <div className="bg-gray-900 px-5 md:px-0 mx-auto">
                <h2 className=" py-10 text-center text-3xl font-bold text-blue-600"> Name : {singleService?.name}</h2>
                <img className="mx-auto rounded-box " src={singleService?.image} alt="" />
                <p className="text-gray-100 pt-5 w-5/6 lg:w-2/5 mx-auto pb-20 text-center"> Description : {singleService?.subtitle} </p>
                <p className="mx-auto pb-20 text-center"> price : {singleService?.price} </p>
                <NavLink className="text-center" to="/checkout"><button className="px-8 py-3 mx-auto mb-10 text-center bg-blue-600 text-white  rounded hover:bg-white hover:text-gray-800 transition duration-300 ">Enroll This Service</button></NavLink>
            </div>

        </div>
    );
};

export default DetailsService;