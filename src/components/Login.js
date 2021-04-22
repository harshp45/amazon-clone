import React, { useState } from "react";
import "../css/Login.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {Redirect} from 'react-router';
import axios from "axios";

function Login() {

    const imgSource=`/Logo/amazonLogo_login.png`;

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [user, setUser] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    const onSubmit = (data) => 
    {
        console.log(data.email);
        axios.post('http://localhost:5000/users/login',{
            email: data.email,
            password: data.password
        })
        .then((response) => 
        {
            setSubmitted(true); 
            setUser(response.data.body);
        }, (error) => 
        {
        console.log(error);
        });
    }

    if (submitted) {
        return <Redirect push to={{
          pathname: '/',
          state:{test: user.name}
        }}
        />
      } 
    return (
        <div className='l-main-div'>
            <Link to='/'>
                <img
                    className="l-amazon-logo"
                    src={imgSource}
                />
            </Link>

            <div className='l-container'>
                <h1>Sign-in</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <h5>E-mail</h5>
                    <input type='text' placeholder="Email" {...register("email", { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })} />
                    <div className="error">{errors.email && "Enter a valid email address"}</div>

                    <h5>Password</h5>
                    <input type='password' placeholder="Password" {...register("password", { required: true })}/>
                    <div className="error">{errors.password && "Enter a valid password"}</div>

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
