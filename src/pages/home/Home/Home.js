import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Advertisement from '../../../shared/Adverticement/Advertisement';
import Header from '../Header/Header';
import ProductsCategories from '../ProductsCategories/ProductsCategories';
import Time from '../Time/Time';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Header></Header>
            <Advertisement></Advertisement>
            <ProductsCategories></ProductsCategories>
            <Time></Time>
        </div>
    );
};

export default Home;