import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const UpdateProfile = () => {
    const user = auth.currentUser;


    const [displayName, setDisplayName] = useState('');
    const [updateProfile,] = useUpdateProfile(auth);



    const navigate = useNavigate()

    const location = useLocation()

    // if (user?.displayName) {
    //     navigate('/')
    // }

    const handleUpdateProfile = (e) => {

        e.preventDefault();
        updateProfile(displayName)
        const from = location.state?.form?.pathname || '/'
        setTimeout(() => {


            if (user) {
                navigate(from, { replace: true })
            }

        }, 2000)

        toast.success('Successfully update Name!!!');


    }
    return (

        <div className="flex justify-center">
            <div className="w-full max-w-xs relative">


                <form onSubmit={handleUpdateProfile} className="bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 my-32">


                    <h2 className="text-lg text-center text-blue-600 text-[32px]">Update Profile</h2>
                    <div className="mt-4 mx-auto">

                    </div>

                    <div className="mb-4">
                        <label className="block text-grey-darker text-blue-600 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>

                        <input type="displayName"
                            value={displayName}
                            onChange={(e) => setDisplayName(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="name" placeholder="name" required />
                    </div>
                    <div className="flex items-center justify-between ">


                        <input onClick={async () => {
                            await updateProfile({ displayName });
                        }} style={{ 'cursor': 'pointer' }} type='submit' className=" ml-0 bg-blue-600 hover:bg-white text-white hover:text-blue-800 font-bold py-1 px-16 rounded-pill focus:outline-none  focus:shadow-outline pointer-events-auto" value="Update" />


                    </div>

                    <div className="p-4" >

                        <p className="text-xs text-gray-900">Already user? <Link className="text-xs text-blue-600" to="/login">
                            Login in gymerAlex

                        </Link></p>
                        <p className="text-xs text-red-800"><Link className="text-xs text-White" to="/forgot">
                            Forgoten Password

                        </Link></p>
                    </div>

                </form>







            </div>

            <ToastContainer
                position="top-center"
                autoClose={1000}
            />

        </div>



    );
};

export default UpdateProfile;