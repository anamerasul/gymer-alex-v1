import React, { useEffect, useState } from 'react';

const UseBlogData = () => {
    const [answers, setAnswers] = useState([])



    useEffect(() => {

        const url = `Question.json`
        fetch(url)


    }, [])
};

export default UseBlogData;