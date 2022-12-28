import React from 'react';
import { useNavigate } from 'react-router-dom';

function Card({ post }) {
    const navigate = useNavigate();

    const clickHandler = (id) => {
        navigate(`/post/${id}`);
    }

    return (
        <div className='card' onClick={() => clickHandler(post.id)}>
            <span className='title'>{post.title}</span>
            <img src={post.img} alt="" className='img' />
            <p className="desc">{post.longDesc}</p>
            <button type='button' className='cardButton'>Read more</button>
        </div>
    )
}

export default Card