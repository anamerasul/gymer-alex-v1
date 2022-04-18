import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { sendEmailVerification } from 'firebase/auth';
// import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider } from "firebase/auth"
import auth from './../../Firebase/firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SocialSignup = () => {

    // const user = auth.currentUser

    const googleprovider = new GoogleAuthProvider()

    const facebookProvider = new FacebookAuthProvider();

    const githubprovider = new GithubAuthProvider();

    const navigate = useNavigate()

    const location = useLocation()


    const [error, setError] = useState([])


    const verifyEmail = () => {

        sendEmailVerification(auth.currentUser)
            .then(() => {

                console.log('verify')
            })
    }

    const handleGoogleSignUp = () => {


        signInWithPopup(auth, googleprovider)
            .then((result) => {
                const user = result.user;

                console.log(user)


                if (user?.emailVerified === false) {

                    verifyEmail()
                }

                toast.success('User Successfully Logged In');




            }).catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;

                setError(errorMessage)

                toast.error(errorMessage)

            });

        setError('');


    }

    const handleFacebookSignIn = () => {
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;


                console.log(user)

                if (user?.emailVerified === false) {

                    verifyEmail()
                }





            })
            .catch((error) => {

                const errorMessage = error.message;

                setError(errorMessage)

                toast.error(errorMessage)
            });



        setError('');
    }
    const handleGitHubSignIn = () => {
        signInWithPopup(auth, githubprovider)
            .then((result) => {
                const user = result.user;
                if (user?.emailVerified === false) {
                    verifyEmail()
                }

                toast.success('User Successfully Logged In !!!');


            })

            .catch((error) => {

                const errorMessage = error.message;

                setError(errorMessage)
                toast.error(errorMessage)
            });

        setError('');




    }

    const from = location.state?.form?.pathname || '/'

    if (auth.currentUser) {
        navigate(from, { replace: true })
    }







    return (
        <div>

            {error ? <p className="text-red-800 absolute bottom-10 mb-10 "> {error}</p> : ''}

            <button onClick={handleGoogleSignUp} className="bg-gray-200 mx-auto flex justify-between items-center text-center absolute bottom-7 left-0 ml-8 text-black font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline text-[14px]">
                <FcGoogle className='ml-2'></FcGoogle>
            </button>

            <button onClick={handleFacebookSignIn} className="bg-gray-200 mx-auto flex justify-between items-center text-center absolute bottom-7 right-20  mr-16   text-black font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline text-[14px]">
                <BsFacebook className='ml-2 text-blue-700'></BsFacebook>

            </button>
            <button onClick={handleGitHubSignIn} className="bg-gray-200 mx-auto flex justify-between items-center text-center absolute bottom-7 right-0 mr-16  text-black font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline text-[14px]">
                <AiFillGithub className='ml-2 text-gray-700'></AiFillGithub>
            </button>


            <ToastContainer
                position="top-center"
                autoClose={1000}
            />

        </div>
    );
};

export default SocialSignup;