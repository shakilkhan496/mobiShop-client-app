import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Advertisement = () => {
    const { data: advertisedProduct = [] } = useQuery({
        queryKey: ['advertisedProduct'],
        queryFn: () => fetch(`http://localhost:5000/advertised`)
            .then(res => res.json())
    })

    return (
        <div>
            {
                advertisedProduct.length > 0 &&
                <div>
                    <h1 className='lg:text-4xl md:text-4xl text-3xl text-center font-mono font-semibold mt-20 mb-20'>Our top <span className='text-primary'>products</span></h1>
                    <div className='flex'>
                        {
                            advertisedProduct &&
                            advertisedProduct.map(advertised =>
                                <marquee direction="right" >
                                    <div key={advertised._id} className='h-60  '>
                                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                                            <figure><img className='w-40' src={advertised.img} alt="Shoes" /></figure>
                                            <div className="card-body">
                                                <h2 className="card-title font-mono">{advertised.productName}</h2>
                                                <p className='text-black font-mono font-bold'>Price:{advertised.resalePrice} $</p>


                                            </div>
                                        </div>
                                    </div>
                                </marquee>
                            )
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default Advertisement;