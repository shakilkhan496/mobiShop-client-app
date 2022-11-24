import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const { emailLogin, googleLogin } = useContext(AuthContext);
    const [err, setErr] = useState();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const handleSubmit = (e) => {

        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        emailLogin(email, password)
            .then(res => {
                const user = res.user;
                navigate(from, { replace: true });
            })
            .catch(err => {
                toast.error(err.message);
                setErr(err.message);
            })


    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                const user = res.user;
                const userdata = {
                    name: user.displayName,
                    email: user.email,
                    slot: 'user'
                }

                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userdata)
                })
                    .then(res => res.json())
                    .then((data) => {
                        console.log(data);
                        navigate(from, { replace: true });
                    })
            })
    }



    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-2xl mt-10 text-center font-mono  font-semibold">Login</h1>

                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className='text-sm font-mono'>
                            <p>New to our website?</p> <p className='text-primary hover:link   ' ><Link className='animate-pulse' to='/signup'>Register now</Link></p >
                        </div>
                        <div className='text-red-600 m-4'>
                            <p>{err}</p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div>
                        <div className="divider">OR</div>
                    </div>
                    <button onClick={handleGoogleLogin} className='mb-5 btn bg-secondary w-3/4 text-white ml-8'>Login with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;