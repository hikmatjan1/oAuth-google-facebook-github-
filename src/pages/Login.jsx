import React from 'react';
import { CgGoogle } from 'react-icons/cg';
import { ImFacebook, ImGithub } from 'react-icons/im';

function Login() {

    return (
        <div className='login'>
            <h1 className='loginTitle'>Choose a Login Method</h1>
            <div className="wrapper">
                <div className="left">
                    <div className="loginButton google">
                        <CgGoogle className='icon' />
                        Google
                    </div>
                    <div className="loginButton facebook">
                        <ImFacebook className='icon' />
                        Facebook
                    </div>
                    <div className="loginButton github">
                        <ImGithub className='icon' />
                        Github
                    </div>
                </div>
                <div className="center">
                    <div className="line" />
                    <div className="or">OR</div>
                </div>
                <div className="right">
                    <input type="text" placeholder='Username' />
                    <input type="text" placeholder='Password' />
                    <button className="submit">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login;