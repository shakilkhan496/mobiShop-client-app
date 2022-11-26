import React, { useEffect, useState } from 'react';
import axios from "axios";
import CategoryCard from './CategoryCard';

const ProductsCategories = () => {
    const [category, setCategory] = useState([]);


    useEffect(() => {
        axios.get('https://assignment-12-server-sable.vercel.app/categories').then(res => {
            setCategory(res.data)
        })

    }, [])

    return (
        <div>
            <h1 className='mt-20 font-bold font-mono  text-center lg:text-4xl text-3xl'>Phones by <span className='text-primary'>Brand</span></h1>
            <div className='grid gap-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center'>

                {
                    category?.map(category => <CategoryCard
                        category={category}
                        key={category._id}
                    ></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default ProductsCategories;

