import React from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';

const Logout = () => {
    const [user] = useAuthState(auth)

    const navigate = useNavigate()

    const location = useLocation()

    const handleLogoutSubmit = (e) => {

        e.preventDefault()
        signOut(auth)

        const from = location?.state?.form?.pathname || '/'

        setTimeout(() => {
            if (user) {
                navigate(from, { replace: true })
            }

            else {

                navigate(from, { replace: false })
            }

        }, 1000)
    }
    return (
        <div>
            <div className="flex justify-center">
                <div className="w-full max-w-xs relative">


                    <form onSubmit={handleLogoutSubmit} className="bg-gray-400 shadow-md rounded px-8 pt-6 pb-8 mb-4 my-32">
                        <div className="mt-4 mx-auto">
                        </div>

                        <div className="mb-4">
                            <h2 className="block text-blue-600 text-center text-sm font-bold mb-2">
                                {user?.displayName || user?.email}
                            </h2>
                            <h2 className="block text-grey-darker text-center mx-auto ml-28  text-sm font-bold mb-2">
                                {user?.displayName && <img className="text-center h-[45px] w-[45px]" style={{ "border-radius": "50%" }} src={user?.photoURL} alt="" />}
                            </h2>
                        </div>


                        <div className="mb-4">
                        </div>

                        <div className="flex items-start mb-6">
                        </div>
                        <div className="flex items-center justify-between ">


                            <input type='submit' className=" ml-10 bg-red-600 hover:bg-gray-600 hover:text-white text-white font-bold py-1 px-16 rounded-pill focus:outline-none  focus:shadow-outline" value='Logout' />


                        </div>
                        <div className="p-4" >


                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Logout;




