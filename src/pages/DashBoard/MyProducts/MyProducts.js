import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import Loading from '../../../components/Loading/Loading';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const { data: myProducts = [], isLoading } = useQuery({
        queryKey: ['myProducts'],
        queryFn: () => fetch(`http://localhost:5000/myProducts?email=${user.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
    })

    return (
        <div>
            <div>
                {
                    isLoading && <Loading></Loading>
                }
                My Products
            </div>
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
                                <th>Delete</th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                myProducts?.map((myOrder, idx) => <tr key={idx}>
                                    <th>
                                        <label>
                                            {idx + 1}
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={myOrder.img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p>{myOrder.productName}</p>
                                    </td>
                                    <td>{myOrder.resalePrice}</td>
                                    <th>
                                        <button className="btn bg-primary btn-ghost btn-xs px-4 text-white font-mono">Delete</button>
                                    </th>
                                </tr>)
                            }

                        </tbody>



                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyProducts;