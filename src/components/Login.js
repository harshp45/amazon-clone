import React from 'react';
import "../css/Login.css";
import { Link } from "react-router-dom";

function Login() {

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

                <form>
                    <h5>E-mail</h5>
                    <input type='text' placeholder="Email" />

                    <h5>Password</h5>
                    <input type='password' placeholder="Password"/>

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

export default Login
