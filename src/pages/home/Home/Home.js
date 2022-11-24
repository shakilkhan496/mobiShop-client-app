import React, { useContext } from 'react';
import Loading from '../../../components/Loading/Loading';
import { AuthContext } from '../../../contexts/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import Advertisement from '../../../shared/Adverticement/Advertisement';
import Header from '../Header/Header';
import ProductsCategories from '../ProductsCategories/ProductsCategories';
import Time from '../Time/Time';

const Home = () => {
    useTitle('Home');
    const { loading } = useContext(AuthContext);
    return (
        <div>
            {
                loading ? <Loading></Loading> :
                    <>
                        <Header></Header>
                        <Advertisement></Advertisement>
                        <ProductsCategories></ProductsCategories>
                        <Time></Time>
                    </>
            }
        </div>
    );
};

export default Home;