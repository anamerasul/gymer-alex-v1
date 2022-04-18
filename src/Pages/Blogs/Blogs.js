import React from 'react';
import QuestionAnswer from '../../Components/QuestionAnswer/QuestionAnswer';
import Spinner from '../../Components/Spinner/Spinner';
import UseBlogData from '../../Hooks/UseBlogData';


const Blogs = () => {

    const [QuestionWithAnswers] = UseBlogData([])


    return (


        <>
            {
                QuestionWithAnswers.length === 0 ? (<Spinner></Spinner>) : (

                    <section className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
                        <div className=''>
                            <div>

                                <h1 className='mb-6 text-2xl  text-blue-700 md:text-4xl font-bold'>
                                    FAQ
                                </h1>
                                {

                                    QuestionWithAnswers.map(data =>

                                        <QuestionAnswer
                                            key={data.id}
                                            data={data}
                                        ></QuestionAnswer>
                                    )
                                }
                            </div>
                        </div>
                    </section >

                )
            }

        </>
    );
};

export default Blogs;


