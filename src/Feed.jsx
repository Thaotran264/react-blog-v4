import React, { useContext } from 'react';
import DataContext from './context/DataContext';
import Post from './Post';

const Feed = () => {
    const { currentPosts } = useContext(DataContext)
    return (
        <div className='home-container'>
            {currentPosts.map(post =>
                <Post key={post.id} post={post} />)}
        </div>);
};

export default Feed;
