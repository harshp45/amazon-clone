import React, { useState } from "react";
import "../css/Register.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Register() {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => console.log(data);

    return (
        <div className='r-main-div'>
            <Link to='/'>
                <img
                    className="r-amazon-logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
            </Link>

            <div className='r-container'>
                <h3>Create account</h3>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <h6>Your Name</h6>
                    <input type='text'  {...register("Name", { required: true})} />
                    <div className="error">{errors.Name && "Name is required"}</div>
                    
                    <h6>Email</h6>
                    <input type='text'  {...register("Email", { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })} />
                    <div className="error">{errors.Email && "Enter a valid email address"}</div>

                    <h6>Password</h6>
                    <input type='password' placeholder="At Least 6 Characters" {...register("Password", { required: true, pattern: /^(?=.*[a-zA-Z])(?=\w*[0-9])\w{6,12}$/ })}/>
                    <div className="error">{errors.Password && "Enter a valid password"}</div>

                    <h6>Password again</h6>
                    <input type='password' {...register("PassAgain", { required: true, pattern: /^(?=.*[a-zA-Z])(?=\w*[0-9])\w{6,12}$/ })}/>
                    <div className="error">{errors.PassAgain && "Enter Password Again"}</div>

                    <button type='submit' className='CreateAccount-btn'>Create Your Amazon Account</button>
                </form>

                <p>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>
                <div>
                    <hr/>
                </div>
            <span>Already have an account? Sign In</span>
            </div>
        </div>
    )
}

export default Register
