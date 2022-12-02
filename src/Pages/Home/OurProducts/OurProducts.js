import React, { useEffect, useState } from 'react';
import ProductsCard from './ProductsCard';

const OurProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('ourProduct.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='py-24'>
            <div className='text-center '>
                <p className='text-orange-600 text-xl font-bold'>Popular Products</p>
                <h1 className='text-5xl font-bold my-5'>Browse Our Products</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable.  </p>
            </div>
            <div className="services-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14 ">
                {
                    products.map(product => <ProductsCard
                        key={product._id}
                        product={product}
                    ></ProductsCard>)
                }
            </div>
            <div className='mt-12 text-center '>
                <button className="btn btn-outline btn-error">More Services</button>
            </div>
        </div>
    );
};

export default OurProducts;