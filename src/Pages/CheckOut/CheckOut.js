import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from '../../Firebase/firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router';

const CheckOut = () => {
    const [user] = useAuthState(auth)
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phoneNumber, setPhoneNumber] = useState(0)
    const [date, setDate] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()
    const location = useLocation()


    const handleNameBlur = (e) => {

        setName(e.target.value)
    }

    const handleEmailBlur = e => {

        setEmail(e.target.value)
    }


    const handleAddressBlur = e => {

        // setPassword(e.target.value)

        setAddress(e.target.value)
    }

    const handlePhoneNumberdBlur = e => {
        console.log(e.target.value)

        const num = e.target.value
        console.log(typeof +num)

        if (num) {
            setPhoneNumber(num)
        }
    }
    const handleDateBlur = e => {

        setDate(e.target.value)
    }


    const handleShipment = (e) => {

        e.preventDefault()
        const shiping = { name, email, address, phoneNumber, date }

        console.log(shiping)

        toast.success('User Successfully purchase');
        const from = location?.state?.form?.pathname || '/'
        setTimeout(() => {

            if (user) {
                navigate(from, { replace: true })
            }
        }, 5000)
    }
    setError('')
    // console.log(name)






    return (


        <div>
            <div className="flex justify-center">
                <div className="w-full max-w-xs relative">


                    <form onSubmit={handleShipment} className="bg-gray-500 shadow-md rounded px-8 pt-6 pb-8 mb-4 my-32">


                        <h2 className="text-lg text-center text-[32px] text-blue-700">Personal information</h2>
                        <div className="mt-4 mx-auto">
                        </div>

                        <div className="mb-4">
                            <label className="block text-grey-darker text-white text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>

                            <input onBlur={handleNameBlur} className="shadow appearance-none text-gray-900 border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="name" required />
                        </div>


                        <div className="mb-4">
                            <label className="block text-grey-darker text-white text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>

                            <input onBlur={handleEmailBlur} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email" required />
                        </div>



                        <div className="mb-4">
                            <label className="block text-grey-darker text-sm font-bold mb-2 text-white" htmlFor="password">
                                Address
                            </label>
                            <input onBlur={handleAddressBlur} className="shadow appearance-none text-gray-900 border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline" id="address" type="text" placeholder="Dhaka,bangladesh" required />

                        </div>


                        <div className="mb-4">
                            <label className="block text-grey-darker text-sm text-white font-bold mb-2" htmlFor="password">
                                Phone number
                            </label>
                            <input onBlur={handlePhoneNumberdBlur} className="shadow appearance-none border text-gray  border-red rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline" id="PhoneNumber" type="number" placeholder="+88347645644" required />
                            <p className="text-red-600 text-xs italic">{error}</p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-grey-darker text-sm text-white font-bold mb-2" htmlFor="amount">
                                Amount
                            </label>
                            <input className="shadow appearance-none border text-gray  border-red rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline" id="amount" type="number" placeholder="" required />

                        </div>
                        <div className="mb-4">
                            <label className="block text-grey-darker text-sm text-white font-bold mb-2" htmlFor="password">
                                TRX ID
                            </label>
                            <input className="shadow appearance-none border text-gray  border-red rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline" id="trx" type="text" placeholder="" required />

                        </div>

                        <div className="mb-4">
                            <label className="block text-grey-darker text-sm font-bold mb-2 text-white" htmlFor="password">
                                Date
                            </label>
                            <input onBlur={handleDateBlur} className="shadow text-gray-900 appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3 leading-tight focus:outline-none focus:shadow-outline" id="Date" type="date" placeholder="22-mar-2022" required />

                            <p className="text-red-600 text-xs italic">{error}</p>
                        </div>

                        <div className="flex items-start mb-6">

                        </div>
                        <div className="flex items-center justify-between ">


                            <input type='submit' className=" ml-8 bg-blue-80 text-white font-bold py-1 px-16 rounded-pill bg-blue-700 focus:outline-none  focus:shadow-outline" value='Checkout' />




                        </div>

                        <div className="p-4" >

                        </div>





                    </form>


                </div>


            </div>

            <ToastContainer
                position="top-center"
                autoClose={3000}
            />

        </div>
    );
};

export default CheckOut;