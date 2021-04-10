import React from 'react';
import "../css/Login.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='l-main-div'>
            <Link to='/'>
                <img
                    className="l-amazon-logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
            </Link>

            <div className='l-container'>
                <h1>Sign-in</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <h5>E-mail</h5>
                    <input type='text' placeholder="Email" {...register("Email", { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })} />
                    <div className="error">{errors.Email && "Enter a valid email address"}</div>

                    <h5>Password</h5>
                    <input type='password' placeholder="Password" {...register("Password", { required: true })}/>
                    <div className="error">{errors.Password && "Enter a valid password"}</div>

                    <button type='submit' className='l-SignIn-btn'>Sign In</button>
                </form>

                <div>
                    <span><center>New to Amazon?</center></span>
                </div>

                <Link to="/register">
                    <button className='CreateAccount-btn'>Create your Amazon Account</button>
                </Link>
                
            </div>
        </div>
    )
}

export default Login;
