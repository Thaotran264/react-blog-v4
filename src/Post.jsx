import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    return (
        <article className='post'>
            <Link to={`/post/${post.id}`} className='post-links'>
                <div className='post-image'>
                    <img src={post.postPhoto} alt={post.title}
                        className='post-thumb' />
                </div>
                <div className='post-info'>
                    <h2 className='post-title'>{post.title}</h2>
                    <p className='post-desc'>{(post.body).length > 80
                        ? `${(post.body).slice(0, 80)}...`
                        : post.body
                    }</p>
                </div>
            </Link>
        </article>);
};

export default Post;
