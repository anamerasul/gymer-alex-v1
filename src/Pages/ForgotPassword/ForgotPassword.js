import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';

const ForgotPassword = () => {

    const [email, setEmail] = useState('')

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);


    const handleEmailBlur = e => {

        setEmail(e.target.value)
    }
    const handleForgotSubmit = async (e) => {

        e.preventDefault()

        await sendPasswordResetEmail(email);
        alert('Sent email');
    }
    return (


        <div className="flex justify-center">
            <div className="w-full max-w-xs relative">


                <form onSubmit={handleForgotSubmit} className="bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 my-32">


                    <h2 className="text-lg text-center text-blue-600 text-[32px]">Reset password</h2>
                    <div className="mt-4 mx-auto">
                    </div>


                    <div className="mb-4">
                        <label className="block text-blue-600 text-sm font-bold mb-2" htmlFor="Email">
                            Email
                        </label>


                        <input onBlur={handleEmailBlur} className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker text-gray-900 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email@email.com" required />
                    </div>

                    <div className="flex items-start mb-6">

                    </div>
                    <div className="flex items-center justify-between ">


                        <input style={{ 'cursor': 'pointer' }} type='submit' className=" ml-10 bg-blue-600 hover:bg-white text-white hover:text-blue-800 font-bold py-1 px-16 rounded-pill focus:outline-none  focus:shadow-outline pointer-events-auto" value='RESET' />
                        <br />
                    </div>

                    {/* {
                        loading && <p className="text-blue-800">Loading</p>
                    } */}

                    <div className="p-4" >

                        <p className="text-xs text-blue-800"> <Link className="text-xs text-White" to="/signup">
                            SignUp

                        </Link></p>


                        <p className="text-xs text-blue-800"><Link className="text-xs text-White" to="/login">
                            Login

                        </Link></p>

                    </div>




                </form>




            </div>




        </div>

    );
};

export default ForgotPassword;