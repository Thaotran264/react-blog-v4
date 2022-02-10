import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ posts }) => {
    return (
        <header className='header'>
            <h2 className='header-title'>Most Views</h2>
            <div className='header-container'>
                {posts.length
                    ? <>
                        {posts.slice(0, 4).reverse().map(post =>
                            <article className='post' key={post.id}>
                                <Link to={`/post/${post.id}`} className='post-links'>
                                    <div className='post-image'>
                                        <img src={post.postPhoto} alt={post.title}
                                            className='post-thumb' />
                                    </div>
                                    <div className='post-info'>
                                        <h2 className='post-title'>{post.title}</h2>
                                    </div>
                                </Link>
                            </article>
                        )}
                    </>
                    : (<h2 style={{ textAlign: 'center' }}>No posts to display</h2>)
                }
            </div>

        </header>);
};

export default Header;
