import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { categoryName, img, _id } = category;
    return (
        <Link to={`/category/${_id}`}>
            <div className='mt-20 mb-20'>
                <div className="card p-10 w-80 h-80  shadow hover:shadow-xl transition hover:scale-105">
                    <figure><img className='w-60' src={img} alt={categoryName} /></figure>
                    <div className="card-body">
                        <h2 className="text-center text-2xl font-mono font-extrabold">{categoryName}</h2>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CategoryCard;