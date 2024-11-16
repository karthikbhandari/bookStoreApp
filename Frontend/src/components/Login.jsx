import React from 'react'
import { Link } from 'react-router-dom'
import Signup from './Signup'

import { useForm } from "react-hook-form";
function Login() {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>

            <div>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)} method='dialog'>
                            {/* if there is a button in form, it will close the modal */}
                            <Link className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                onClick={() => {
                                    document.getElementById("my_modal_3").close()
                                }
                                }>✕</Link>

                            <h3 className="font-bold text-lg">Login</h3>
                            <div className='mt-2 space-y-2'>
                                <span>Email:</span>
                                <br />
                                <input type="email"
                                    placeholder='enter your email'
                                    className='w-80 px-3 ml-1 border rounded-md outline-none'

                                    {...register("email", { required: true })}
                                />
                                <br />
                                {errors.email &&
                                    (<span className="text-sm text-red-500">
                                        Field is required</span>)}

                            </div>
                            {/*password*/}

                            <div className='mt-2 space-y-2'>
                                <span>Password:</span>
                                <br />
                                <input type="password"
                                    placeholder='password'
                                    className='w-80 px-3 ml-1 border rounded-md outline-none'
                                    {...register("password", { required: true })}

                                />
                                <br />
                                {errors.password &&
                                    (<span className="text-sm text-red-500">
                                        Field is required</span>)}

                            </div>
                            <div className='flex justify-between mt-5 '>
                                <div>

                                    <button className=' bg-yellow-500 hover:bg-white text-black rounded-md mt-2 hover:text-yellow-500 px-2 py-1'>
                                        Login</button>

                                </div>
                                <div>
                                    <p>no Account?
                                        <Link to='/Signup' className=' underline hover:text-blue-500 text-yellow-500 cursor-pointer ' >sign up!</Link>
                                    </p>
                                </div>


                            </div>
                        </form>
                    </div>
                </dialog >
            </div >
        </>
    )
}

export default Login