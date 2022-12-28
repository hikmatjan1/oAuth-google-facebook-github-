import React from 'react';
import { useLocation } from 'react-router-dom';

function Post() {
    const location = useLocation();
    const post = location.state;

    return (
        <div className='post'>
            <img src={post.img} className='postImg' alt="" />
            <h1 className='postTitle'>{post.title}</h1>
            <p className='postDesc'>{post.desc}</p>
            <p className='postLongDesc'>{post.longDesc}</p>
        </div>
    )
}

export default React.memo(Post);