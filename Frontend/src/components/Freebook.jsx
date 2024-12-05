import React, { useEffect, useState } from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';
function Freebook() {

    const [book, setBook] = useState([]);
    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:4001/book");
                setBook(res.data.filter((data) => data.category === "Free"));
            } catch (error) {
                console.log(error);
                
            }
        }
        getBook();
    });


    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };




    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
                <div>
                    <h1 className=' font-bold text-xl'>here is the heading </h1>
                    <p>when an unknown printer took a galley of type and scrambled it
                        to make a type specimen book. It has survived not only five ce
                        nturies, but also the leap into electronic typesetting, remaini
                        ng essentially unchanged.</p>
                </div>

                <div>
                    <div className="slider-container">
                        <Slider {...settings}>
                            {book.map((item) => <Cards item={item} key={item.id} />)}
                        </Slider>
                    </div>

                </div>
            </div>
        </>

    );
}

export default Freebook;
