import { useEffect, useState } from "react";


const useTestimonialData = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        const url = `testimonial.json`
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return [data, setData]

};

export default useTestimonialData;