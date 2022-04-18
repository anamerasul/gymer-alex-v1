import { useEffect, useState } from 'react';

const UseBlogData = () => {
    const [answers, setAnswers] = useState([])



    useEffect(() => {

        const url = `Question.json`
        fetch(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setAnswers(data))

    }, [])

    return [answers, setAnswers]
};

export default UseBlogData;