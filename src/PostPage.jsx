import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import DataContext from './context/DataContext';

const PostPage = () => {
    const history = useHistory()
    const { posts, setPosts } = useContext(DataContext)
    const { id } = useParams()
    const post = posts.find(post => post.id === id)

    const handleDelete = (id) => {
        const postLists = posts.filter((post) => post.id !== id);

        setPosts(postLists);

        history.push("/");
    };
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
                    <div className='btn-group'>
                        <button onClick={e => handleDelete(post.id)} className='delete-btn'>delete post</button>
                        <Link to={`/edit/${post.id}`} className='edit-btn'>edit post</Link>

                    </div>
                </>}
                {!post && <>
                    <h2>Post not found</h2>
                    <Link to='/'>Go back home</Link>
                </>}
            </article>
        </main>);
};

export default PostPage;

