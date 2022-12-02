import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='py-24 m-auto w-full'>
            <div className='text-center '>
                <p className='text-orange-600 text-xl font-bold'>Services</p>
                <h1 className='text-5xl font-bold my-5'>Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="services-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 m-auto w-full ">
                {
                    services.map(service => <ServicesCard
                        key={service._id}
                        service={service}
                    ></ServicesCard>)
                }
            </div>
            <div className='mt-12 text-center '>
                <button className="btn btn-outline btn-error">More Services</button>
            </div>
        </div>
    );
};

export default Services;