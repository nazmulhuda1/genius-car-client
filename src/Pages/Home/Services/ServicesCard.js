import React from 'react';

const ServicesCard = ({ service }) => {
    const { img, title, price } = service
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl p-4 border border-gray-200">
            <figure><img src={img} alt="Shoes" className='rounded-xl h-60' /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-beetwent items-center">
                    <p className='text-xl text-orange-600 font-semibold'>Price: ${price}</p>
                    <a href='/' className="text-orange-600 font-bold">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;