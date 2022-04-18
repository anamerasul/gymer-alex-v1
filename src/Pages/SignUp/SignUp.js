import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { sendEmailVerification } from 'firebase/auth';
// import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider } from "firebase/auth"
import auth from './../../Firebase/firebase.init';
import SocialSignup from '../SocialSignUp/SocialSignup';



const SignUp = () => {

    const googleprovider = new GoogleAuthProvider()

    const facebookProvider = new FacebookAuthProvider();

    const githubprovider = new GithubAuthProvider();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const [name, setName] = useState('')

    const navigate = useNavigate()

    const location = useLocation()



    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const verifyEmail = () => {

        sendEmailVerification(auth.currentUser)
            .then(() => {

                console.log('verify')
            })
    }

    // const handleGoogleSignUp = () => {


    //     signInWithPopup(auth, googleprovider)
    //         .then((result) => {
    //             const user = result.user;

    //             console.log(user)

    //             verifyEmail()
    //         }).catch((error) => {
    //             // Handle Errors here.
    //             const errorMessage = error.message;

    //             setError(errorMessage)

    //         });


    // }

    // const handleFacebookSignIn = () => {
    //     signInWithPopup(auth, facebookProvider)
    //         .then((result) => {
    //             // The signed-in user info.
    //             const user = result.user;


    //             console.log(user)
    //             verifyEmail()

    //         })
    //         .catch((error) => {

    //             const errorMessage = error.message;
    //             // The email of the user's account used.
    //             setError(errorMessage)
    //         });


    // }
    // const handleGitHubSignIn = () => {
    //     signInWithPopup(auth, githubprovider)
    //         .then((result) => {
    //             const user = result.user;


    //             console.log(user)
    //             verifyEmail()
    //         })

    //         .catch((error) => {
    //             const errorMessage = error.message;
    //             setError(errorMessage)
    //         });


    // }

    const handleNameBlur = (e) => {

        setName(e.target.value)
    }

    const handleEmailBlur = e => {

        setEmail(e.target.value)
    }


    const handlePasswordBlur = e => {

        setPassword(e.target.value)
    }

    const handleConfrimPasswordBlur = e => {

        setConfirmPassword(e.target.value)
    }


    const handleSignUPSubmit = (e) => {

        e.preventDefault()

        if (password !== confirmPassword) {
            setError('your password didnot match')
            return;
        }

        if (password.length < 6) {

            setError('password must be 6 charecter long')
        }
        createUserWithEmailAndPassword(email, password)
        verifyEmail()

        const from = location?.state?.form?.pathname || '/update'

        if (user) {
            navigate(from, { replace: true })
        }


    }







    // useEffect(() => {
    //     if (user) {
    //         navigate("/update")
    //     }
    // }, [])


    return (


        <div>
            <div className="flex justify-center">
                <div className="w-full max-w-xs relative">


                    <form onSubmit={handleSignUPSubmit} className="bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 my-32">


                        <h2 className="text-lg text-center text-blue-600 text-[32px]">Sign up</h2>
                        <div className="mt-4 mx-auto">

                        </div>

                        <div className="mb-4">
                            <label className="block text-grey-darker text-blue-600 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>

                            <input type="text" onBlur={handleNameBlur} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="name" placeholder="name" required />
                        </div>




                        <div className="mb-4">
                            <label className="block text-blue-600 text-grey-darker text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>

                            <input onBlur={handleEmailBlur} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-blue-600 text-grey-darker text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input onBlur={handlePasswordBlur} className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" required />
                        </div>


                        <div className="mb-4">
                            <label className="block text-blue-600 text-grey-darker text-sm font-bold mb-2" htmlFor="password">
                                Confrim Password
                            </label>
                            <input onBlur={handleConfrimPasswordBlur} className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline" id="ConfrimPassword" type="password" placeholder="******************" required />

                            <p className="text-red-600 text-xs italic">{error}</p>
                        </div>
                        <div className="flex items-center justify-between ">


                            <input style={{ 'cursor': 'pointer' }} type='submit' className=" ml-10 bg-blue-600 hover:bg-white text-white hover:text-blue-800 font-bold py-1 px-16 rounded-pill focus:outline-none  focus:shadow-outline pointer-events-auto" value='Sign up' />
                            <br />


                        </div>

                        <div className="p-4" >

                            <p className="text-xs text-gray-900">Already user? <Link className="text-xs text-blue-600" to="/login">
                                Login in gymerAlex

                            </Link></p>
                            <p className="text-xs text-red-800"><Link className="text-xs text-White" to="/forgot">
                                Forgoten Password

                            </Link></p>

                        </div>



                        <p className="text-blue-900 py-2">Continue with</p>

                    </form>


                    <div >
                        {/* 
                        <button onClick={handleGoogleSignUp} className="bg-gray-200 mx-auto flex justify-between items-center text-center absolute bottom-7 left-0 ml-8 text-black font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline text-[14px]">
                            <FcGoogle className='ml-2'></FcGoogle>
                        </button>

                        <button onClick={handleFacebookSignIn} className="bg-gray-200 mx-auto flex justify-between items-center text-center absolute bottom-7 right-20  mr-16   text-black font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline text-[14px]">
                            <BsFacebook className='ml-2 text-blue-700'></BsFacebook>

                        </button>
                        <button onClick={handleGitHubSignIn} className="bg-gray-200 mx-auto flex justify-between items-center text-center absolute bottom-7 right-0 mr-16  text-black font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline text-[14px]">
                            <AiFillGithub className='ml-2 text-gray-700'></AiFillGithub>

                        </button > */}
                        <SocialSignup></SocialSignup>


                    </div>

                </div>


            </div>
        </div>
    );
};

export default SignUp;