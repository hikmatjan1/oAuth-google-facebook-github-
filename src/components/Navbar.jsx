import React from 'react'

function Navbar() {
    return (
        <div className='navbar'>
            <span className="logo">Lama App</span>
            <ul className='list'>
                <li className='listItem'>
                    <img src="https://toppng.com/uploads/preview/happy-black-person-11531493747ib42obkabb.png" className='avatar' alt="" />
                </li>
                <li className='listItem'>John Doe</li>
                <li className='listItem logout'>Logout </li>
            </ul>
        </div>
    )
}

export default React.memo(Navbar);