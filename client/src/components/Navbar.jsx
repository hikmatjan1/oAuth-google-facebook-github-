import React from 'react';
import { Link } from 'react-router-dom';
import { server_url } from '../config';

function Navbar({ user }) {

    // logout
    const logoutFunction = () => {
        window.open(`${server_url}/auth/logout`, "_self");
    }

    return (
        <div className='navbar'>
            <span className="logo"><Link className='link' to="/">Lama App</Link></span>
            {user ? (
                <ul className='list'>
                    <li className='listItem'>
                        <img src={user.photos[0].value} className='avatar' alt="" />
                    </li>
                    <li className='listItem'>{user.displayName}</li>
                    <li className='listItem logout' onClick={logoutFunction}>Logout</li>
                </ul>
            ) : (
                <Link className='link' to="/login">Login</Link>
            )}
        </div >
    )
}

export default React.memo(Navbar);