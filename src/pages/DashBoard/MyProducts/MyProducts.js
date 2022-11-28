import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import Loading from '../../../components/Loading/Loading';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const { data: myProducts = [], isLoading, refetch } = useQuery({
        queryKey: ['myProducts'],
        queryFn: () => fetch(`https://assignment-12-server-shakilkhan496.vercel.app/myProducts?email=${user.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
    })

    const handleAd = (id) => {
        fetch('https://assignment-12-server-shakilkhan496.vercel.app/myProducts', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                authorization: `bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                id
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Advertised!!');
                    refetch();
                }
            })
    }

    const handleDelete = (id) => {
        const confirm = window.confirm('Are you sure you want to delete?')
        if (confirm) {
            fetch('https://assignment-12-server-shakilkhan496.vercel.app/delete', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id
                })
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount > 0) {
                        toast.success('Deleted!!');
                        refetch();
                    }
                })
        }
    }

    return (
        <div>
            <div className='text-xl font-bold p-5'>
                {
                    isLoading && <Loading></Loading>
                }
                My Products
            </div>
            {
                myProducts.length === 0 ? <>
                    <div className='text-center font-semibold p-10'>
                        <h1>No products ware added</h1>
                    </div>
                </>
                    :
                    <div>
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">

                                <thead>
                                    <tr>
                                        <th>
                                            <label>
                                                <p>S.L No</p>
                                            </label>
                                        </th>
                                        <th>Product</th>
                                        <th>Title</th>
                                        <th>Price</th>
                                        <th>Ability</th>
                                        <th>Delete</th>

                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        myProducts &&
                                        myProducts?.map((myProduct, idx) => <tr key={idx}>
                                            <th>
                                                <label>
                                                    {idx + 1}
                                                </label>
                                            </th>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={myProduct.img} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p>{myProduct.productName}</p>
                                            </td>
                                            <td>{myProduct.resalePrice}</td>
                                            <td>{myProduct.status}
                                                {
                                                    myProduct.status === 'available' &&
                                                    <button disabled={`${myProduct.advertised === true ? 'disabled' : ''}`} onClick={() => handleAd(myProduct._id)} className='btn ml-4 btn-sm disabled bg-green-600 text-white'>
                                                        {
                                                            myProduct.advertised === true ? 'Advertised' : 'Advertise'
                                                        }
                                                    </button>

                                                }
                                            </td>

                                            <th>
                                                <button
                                                    onClick={() => handleDelete(myProduct._id)}
                                                    className="btn bg-primary btn-ghost btn-xs px-4 text-white font-mono">Delete</button>
                                            </th>
                                        </tr>)
                                    }

                                </tbody>



                            </table>
                        </div>
                    </div>
            }
        </div>
    );
};

export default MyProducts;