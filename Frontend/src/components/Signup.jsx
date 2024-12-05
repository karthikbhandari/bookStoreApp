import React from 'react'
import { Link, Navigate, replace, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from 'axios'
import toast from 'react-hot-toast';


function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/"
  const { register, handleSubmit, formState: { errors }, } = useForm();
  const onSubmit = async (data) => {
    const userInfo = { 
      fullname: data.fullname,
      email : data.email,
      password: data.password,
    }
    await   axios.post("http://localhost:4001/user/signup",userInfo)
    .then((res) => {
       console.log(res.data);   
       if(res.data){
        toast.success('signup successfull');
        navigate(from,{replace : true});
        window.location.reload();
       }
       localStorage.setItem("Users",JSON.stringify(res.data.user));
    }).catch((err) => {
      if(err.response)
      {console.log(err);
        toast.error('signup failed');  }
    })
  }

  return (
    <>
      <div>
        <div className=' flex h-screen items-center justify-center'>
          <div id="my_modal_3" className='border-[2px] border-grey-500 shadow-md p-5 rounded-md'>
            <form onSubmit={handleSubmit(onSubmit)} method='dialog'>
              {/* if there is a button in form, it will close the modal */}
              <Link to='/'
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </Link>

              <h3 className="font-bold text-lg text-yellow-500">Sign up!</h3>
              {/*name*/}
              <div className='mt-2 space-y-2'>
                <span > Name: </span><br />
                <input type="text"
                  placeholder='Enter your name here '
                  className='w-80 px-3 ml-1 border rounded-md outline-none'
                  {...register("fullname", { required: true })} />
                <br />
                {errors.fullname &&
                  (<span className='text-sm text-red-500'>
                    Field is required</span>)}
              </div>
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
                  (<span className='text-sm text-red-500'>
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
                  (<span className='text-sm text-red-500'>
                    Field is required</span>)}

              </div>
              <div className='flex justify-between mt-5 '>
                <div>
                
                    <button className=' bg-yellow-500 hover:bg-white text-black rounded-md mt-2 hover:text-yellow-500 px-2 py-1'>
                      Sign up</button>
                      
                  

                </div>
              </div>
            </form>
          </div>
        </div >
      </div >
    </>
  )
}

export default Signup
