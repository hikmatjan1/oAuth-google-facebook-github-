import React from 'react';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import { posts } from '../data';

function Home() {
    return (
        <>
            <Navbar />
            <div className='home'>
                {posts.map((post) => (
                    <Card key={post.id} post={post} />
                ))}
            </div>
        </>
    )
}

export default React.memo(Home);