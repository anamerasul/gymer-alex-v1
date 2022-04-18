import { useEffect, useState } from "react";


const useAboutDataHooks = () => {

    const [aboutData, setAboutData] = useState([])

    useEffect(() => {
        const url = `aboutData.json`

        fetch(url)
            .then(res => res.json())
            .then(data => setAboutData(data))


    }, [])

    return [aboutData, setAboutData]

};

export default useAboutDataHooks;