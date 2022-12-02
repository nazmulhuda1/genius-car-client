import React from 'react';
import loginImg from '../../assets/images/login/login.svg'

const Login = () => {

    const handleLogin = (event) => {
        event.preventDefault()
    }

    return (
        <div className="hero w-full">
            <div className="hero-content grid md:grid-cols-2 gap-20 justify-between ">
                <div className="">
                    <img src={loginImg} alt="" className='h-96' />
                </div>
                <div className="card  py-7  w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Login" className="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;