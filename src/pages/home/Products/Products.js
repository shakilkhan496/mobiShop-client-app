import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLoaderData } from 'react-router-dom';
import MobilesCard from './MobilesCard';
import Loading from '../../../components/Loading/Loading';
import { AuthContext } from '../../../contexts/AuthProvider';

const Products = () => {
    const mobiles = useLoaderData();
    // const { loading } = useContext(AuthContext);


    return (
        <div>
            <div className='text-center font-mono pt-5 text-2xl'>
                <h1>Your selected phones</h1>
            </div>
            <div className='grid lg:p-20 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-5'>
                {
                    mobiles?.map(mobile => <MobilesCard key={mobile._id} mobile={mobile}></MobilesCard>)
                }
            </div>
        </div>
    );
};

export default Products;


// {
//     loading ? <div className='grid lg:grid-cols-3 md:grid-cols-2 md:p-28 mt-10 mb-10 lg:p-28 gap-10'>


//         {
//             services?.map(service => <AllServiceCard service={service} key={service._id}></AllServiceCard>)
//         }
//     </div> : <div className='flex h-60 justify-center items-center'>

//         <h1 className='text-center'> <img className='w-24' src="https://i.gifer.com/ZKZg.gif" alt="" /></h1>
//     </div>
// }