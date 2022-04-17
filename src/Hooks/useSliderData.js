import { useEffect, useState } from "react";

const useSliderData = () => {
    const [sliderData, setSliderData] = useState([])

    useEffect(() => {
        const url = `slider.json`
        fetch(url)
            .then(res => res.json())
            .then(data => { setSliderData(data) })


    }, [])

    return [sliderData, setSliderData]
};

export default useSliderData;