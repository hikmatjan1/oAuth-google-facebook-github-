import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ user }) {
    return (
        <div className='navbar'>
            <span className="logo"><Link className='link' to="/">Lama App</Link></span>
            {user ? (
                <ul className='list'>
                    <li className='listItem'>
                        <img src="https://toppng.com/uploads/preview/happy-black-person-11531493747ib42obkabb.png" className='avatar' alt="" />
                    </li>
                    <li className='listItem'>John Doe</li>
                    <li className='listItem logout'>Logout </li>
                </ul>
            ) : (
                <Link className='link' to="/login">Login</Link>
            )}
        </div >
    )
}

export default React.memo(Navbar);