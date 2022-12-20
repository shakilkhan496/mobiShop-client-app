import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { motion } from 'framer-motion'

const Advertisement = () => {
    const { data: advertisedProduct = [] } = useQuery({
        queryKey: ['advertisedProduct'],
        queryFn: () => fetch(`https://assignment-12-server-shakilkhan496.vercel.app/advertised`)
            .then(res => res.json())
    })


    return (
        <div>
            {
                advertisedProduct.length > 0 &&
                <div>
                    <h1 className='lg:text-4xl md:text-4xl text-3xl text-center   font-semibold mt-20 mb-5'>Our Advertised <span className='text-primary'>products</span></h1>
                    <div className='lg:mx-32'>
                        {
                            advertisedProduct &&

                            <motion.div className='carouse rounded-lg shadow-inner  bg-primary bg-gradient-to-r from-transparent to-secondary py-6 cursor-grab overflow-hidden'>
                                <motion.div drag={'x'} dragConstraints={{ right: 0, left: -200 }} className='inner-carousel justify-center  flex'>
                                    {
                                        advertisedProduct.map(advertised =>

                                            <motion.div key={advertised._id} style={{ minWidth: '12rem' }} className='h-60 item pointer-events-none  '>
                                                {
                                                    !advertised.paid === true
                                                    &&
                                                    <div className="card card-compact   w-80 h-60 ml-4  bg-base-200 hover:scale-110 transition shadow-2xl">
                                                        <figure><img className='w-40' src={advertised.img} alt="Shoes" /></figure>
                                                        <div className="card-body">
                                                            <h2 className="card-title  ">{advertised.productName}</h2>
                                                            <p className='text-xl   text-primary font-bold'>Price:{advertised.resalePrice} $</p>


                                                        </div>
                                                    </div>
                                                }
                                            </motion.div>

                                        )
                                    }
                                </motion.div>
                            </motion.div>
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default Advertisement;




