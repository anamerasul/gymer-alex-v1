import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';

import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';


import auth from '../../Firebase/firebase.init';


const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [error, setError] = useState('')

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.form?.pathname || '/'

    if (user) {
        navigate(from, { replace: true })
    }


    const handleGoogleSignIn = () => {



    }
    const handleFacebookSignIn = () => {



    }
    const handleGitHubSignIn = () => {



    }

    const handleEmailBlur = e => {

        setEmail(e.target.value)
    }


    const handlePasswordBlur = e => {

        setPassword(e.target.value)
    }


    const handleLoginSubmit = (e) => {

        e.preventDefault()

        signInWithEmailAndPassword(email, password)



    }
    return (
        <div>

            <div className="flex justify-center">
                <div className="w-full max-w-xs relative">


                    <form onSubmit={handleLoginSubmit} className="bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 my-32">


                        <h2 className="text-lg text-center text-blue-600 text-[32px]">Login</h2>
                        <div className="mt-4 mx-auto">
                        </div>


                        <div className="mb-4">
                            <label className="block text-blue-600 text-sm font-bold mb-2" htmlFor="Email">
                                Email
                            </label>


                            <input onBlur={handleEmailBlur} className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker text-gray-900 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email@email.com" required />
                        </div>



                        <div className="mb-4">
                            <label className="block text-blue-600  text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input onBlur={handlePasswordBlur} className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker text-gray-900 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" required />

                            <p className="text-red-900 text-xs italic">{error?.message}</p>

                        </div>

                        <div className="flex items-start mb-6">

                        </div>
                        <div className="flex items-center justify-between ">


                            <input style={{ 'cursor': 'pointer' }} type='submit' className=" ml-10 bg-blue-600 hover:bg-white text-white hover:text-blue-800 font-bold py-1 px-16 rounded-pill focus:outline-none  focus:shadow-outline pointer-events-auto" value='Login' />
                            <br />
                        </div>

                        {
                            loading && <p className="text-blue-800">Loading</p>
                        }

                        <div className="p-4" >

                            <p className="text-xs text-blue-800">New to Gamer? <Link className="text-xs text-White" to="/signup">
                                Create a user

                            </Link></p>

                            <p className="text-xs text-red-800"><Link className="text-xs text-White" to="/forgot">
                                Forgoten Password

                            </Link></p>

                        </div>


                        <p className="text-blue-900 py-2">Continue with</p>


                    </form>

                    <div>

                        <button onClick={handleGoogleSignIn} className="bg-gray-200 mx-auto flex justify-between items-center text-center absolute bottom-7 left-0 ml-8 text-black font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline text-[14px]">
                            <FcGoogle className='ml-2'></FcGoogle>
                        </button>

                        <button onClick={handleFacebookSignIn} className="bg-gray-200 mx-auto flex justify-between items-center text-center absolute bottom-7 right-20  mr-16   text-black font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline text-[14px]">
                            <BsFacebook className='ml-2 text-blue-700'></BsFacebook>

                        </button>
                        <button onClick={handleGitHubSignIn} className="bg-gray-200 mx-auto flex justify-between items-center text-center absolute bottom-7 right-0 mr-16  text-black font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline text-[14px]">
                            <AiFillGithub className='ml-2 text-gray-700'></AiFillGithub>

                        </button>



                    </div>




                </div>




            </div>

        </div>
    );
};

export default Login;







    // console.log(name)





