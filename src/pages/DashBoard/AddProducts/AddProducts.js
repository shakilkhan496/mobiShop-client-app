import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddProducts = () => {
    const { user } = useContext(AuthContext);
    const date = new Date();
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const productName = form.productName.value;
        const OriginalPrice = form.OriginalPrice.value;
        const resalePrice = form.resalePrice.value;
        const image = form.image.files[0];
        const postTime = date;
        const condition = form.condition.value;
        const location = form.location.value;
        const yearOfPurchase = form.yearOfPurchase.value;
        const categoryId = form.categoryId.value;
        const useTime = form.useTime.value;
        const sellerName = form.sellerName.value;
        const sellerPhoneNumber = form.sellerPhoneNumber.value;
        const description = form.description.value;



        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMG_BB_KEY}`;
        fetch(url, {
            method: 'POST',
            body: formData,
        }).then(res => res.json())
            .then(data => {
                const img = data.data.url;
                const productsData = {
                    productName,
                    OriginalPrice,
                    resalePrice,
                    img,
                    postTime,
                    condition,
                    location,
                    yearOfPurchase,
                    categoryId,
                    useTime,
                    sellerName,
                    sellerPhoneNumber,
                    sellerEmail: user.email,
                    description,
                    status: 'available'
                }

                fetch('http://localhost:5000/addProduct', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(productsData),
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged === true) {
                            toast.success('Product added successfully')
                            navigate('/dashboard/myProducts')
                        }
                    })
                    .catch(err => {
                        toast.error(`${err}`)
                    })


            }).catch(err => console.log(err));
    }


    return (
        <div className="hero bg-white">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl font-bold">Add your products</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <input className='input input-bordered' name='productName' placeholder='Product Name' type="text" />
                        <input className='input input-bordered' name='OriginalPrice' placeholder='Original Price' type="text" />
                        <input className='input input-bordered' name='resalePrice' placeholder='Resell price' type="text" />
                        <label className='text-sm font-mono font-semibold'>Upload product image</label>
                        <input
                            type='file'
                            id='image'
                            name='image'
                            accept='image/*'
                            required
                        />
                        <label className='text-sm'>Condition</label>
                        <select name='condition' className='input input-bordered'>
                            <option value="Excellent">Excellent</option>
                            <option value="Good">Good</option>
                            <option value="Fair">Fair</option>
                        </select>
                        <input className='input input-bordered' name='location' placeholder='Location' type="text" />
                        <input className='input input-bordered' name='yearOfPurchase' placeholder='Year of purchase' type="text" />
                        <label className='text-sm'>Category</label>
                        <select name='categoryId' className='input input-bordered'>
                            <option value="Apple Iphone">Apple Iphone</option>
                            <option value="Samsung">Samsung</option>
                            <option value="OnePlus">OnePlus</option>
                        </select>
                        <input className='input input-bordered' name='useTime' placeholder='Uses time' type="text" />
                        <input className='input input-bordered' name='sellerName' placeholder='Your Name' type="text" />
                        <input className='input input-bordered' name='sellerPhoneNumber' placeholder='Your phone number' type="text" />
                        <input disabled className='input input-bordered' placeholder={user.email} type="email" />
                        <textarea name='description' className="textarea textarea-bordered" placeholder="Description"></textarea>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">ADD</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;