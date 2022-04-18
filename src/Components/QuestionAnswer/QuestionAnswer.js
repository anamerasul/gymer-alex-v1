import React from 'react';

const QuestionAnswer = (props) => {
    const { question, answer } = props.data
    return (
        <div>

            <p className='mt-10 mb-3 font-semibold text-white'>
                {question}
            </p>
            <p className='text-white'>
                {answer}
            </p>

        </div>
    );
};

export default QuestionAnswer;