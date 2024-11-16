import React from 'react'
import Cards from './Cards'
import list from '/src/list.json'
import { Link } from 'react-router-dom'
function Course() {


    return (
        <>
            <div>
                <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                    <div className='mt-28 items-center justify-center text-center'>
                        <h1 className='text-2xl md:text-4xl '>
                            Good to see you <span className='text-yellow-500'>here</span>.
                        </h1>
                        <p className='mt-6'>tatem accusantium doloremque laudantium, totam rem aperiam,
                            eaque ipsa quae ab Sed ut perspiciatis unde omnis iste natus error sit volup tatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa \
                            quae ab illo inventore veritatis et quasi archite
                        </p>
                        <Link to="/">
                            <button className=' bg-yellow-500 hover:bg-white text-black rounded-md mt-2 hover:text-yellow-500 px-2 py-1'>
                                Back</button>
                        </Link>

                    </div>
                    <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                        {
                            list.map((item) => (
                                <Cards key={item.id} item={item} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Course
