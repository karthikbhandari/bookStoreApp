import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import axios from 'axios';
function Course() {
    const [book,setBook] = useState([])
    useEffect(() => {
        const getBook=async() => {
            try {
               const res = await axios.get("http://localhost:4001/book");
                console.log(res.data);
                setBook(res.data);
            } catch (error) {
                console.log(error);
                
            }
        }
        getBook();
    }, []);

    return (
        <>
            <div>
                <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                    <div className='mt-28 items-center justify-center text-center'>
                        <h1 className='text-2xl md:text-4xl '>
                            Good to see you <span className='text-yellow-500'>here</span>.
                        </h1>
                        <p className='mt-6'>Congratulations!!! You are money wont get wasted here, Please feel like a free to have some good books in your queue.
                        </p>
                        <Link to="/">
                            <button className=' bg-yellow-500 hover:bg-white text-black rounded-md mt-2 hover:text-yellow-500 px-2 py-1'>
                                Back</button>
                        </Link>

                    </div>
                    <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                        {
                            book.map((item) => (
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
