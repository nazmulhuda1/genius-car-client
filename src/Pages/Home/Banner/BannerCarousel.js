import React from 'react';

const BannerCarousel = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className="carousel-img">
                <img src={image} className="w-full rounded-xl" alt='' />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-8  top-1/4">
                <div className="home-title">
                    <h1 className='text-6xl text-white'>
                        AAffordable <br />
                        Price For Car <br />
                        Servicing
                    </h1>
                </div>
            </div>
            <div className="absolute w-2/5 flex justify-end transform -translate-y-1/2 left-8  top-1/2">
                <p className='text-xl text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute w-2/5 flex justify-start transform -translate-y-1/2 left-8  top-3/4">
                <button className="btn btn-error mr-5">Discover More</button>
                <button className="btn btn-outline btn-error">Appointment</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerCarousel;