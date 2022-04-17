import { useEffect, useState } from "react";


const UseServiceData = () => {
    const [services, setServices] = useState([])

    useEffect(() => {

        const url = `services.json`
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return [services, setServices]
};

export default UseServiceData;