import React from 'react'
import Shopping from '/src/Shopping.jpg'
import cart from "/src/cart.jpg"
function Banner() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
        <div className='order-2 md:order-1 wd-full md:w-1/2 mt-12 md:mt-32'>
          <div className='space-y-12'>
            <h1 className='text-4xl font-bold'>Hello, Shop now <br /><span className='text-yellow-500'>welcomes you!!!</span></h1>
            <p className='text-xl'>"Sed ut perspiciatis unde omnis iste natus error sit volup
              tatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab Sed ut perspiciatis unde omnis iste natus error sit volup tatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi archite
              illo inventore veritatis et Sed ut perspiciatis unde omnis iste natus error sit volup tatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architequasi archite
            </p>
            <label className="input input-bordered flex items-center gap-2 ">
              Email
              <input type="text" className="grow" placeholder="daisy@site.com" />
            </label>
          </div>
            <button className='btn btn-ghost text-xl'>Btn</button>
        </div>
        <div className='order-1 wd-full md:w-1/2'>
          <img src={Shopping} className='m-20 w-70 h-70' alt="shopping-image" />
        </div>
      </div>
    </>
  )
}

export default Banner
