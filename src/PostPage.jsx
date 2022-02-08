import React from 'react';
import { Link, useParams } from 'react-router-dom';

const PostPage = ({ posts, handleDelete }) => {
    const { id } = useParams()
    const post = posts.find(post => (post.id).toString() === id)

    return (
        <main className='post-detail'>
            <article className='post-detail-items'>
                {post && <>
                    <div className='post-detail-image'>
                        <img src={post.postPhoto} className='post-detail-thumb' alt="" />
                    </div>
                    <div className='post-detail-info'>
                        <h2 className='post-detail-title'>{post.title}</h2>
                        <p className='post-detail-desc'>{post.body}</p>
                    </div>
                    <button onClick={e => handleDelete(post.id)}>Deletepost</button>
                </>}
                {!post && <>
                    <h2>Post not found</h2>
                    <Link to='/'>Go back home</Link>
                </>}
            </article>
        </main>);
};

export default PostPage;

