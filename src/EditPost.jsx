import { format } from 'date-fns';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import DataContext from './context/DataContext';
import api from './api/posts'

const EditPost = () => {
    const history = useHistory()
    const { posts, setPosts } = useContext(DataContext)
    const [editTitle, setEditTitle] = useState("");
    const [editBody, setEditBody] = useState("");
    const [editPhoto, setEditPhoto] = useState("");
    const { id } = useParams()
    const post = posts.find(post => post.id === id)

    useEffect(() => {
        if (post) {
            setEditTitle(post.title)
            setEditBody(post.body)
            setEditPhoto(post.postPhoto)
        }
    }, [post, setEditBody, setEditTitle, setEditPhoto])
    const handleEdit = async (id) => {
        const datetime = format(new Date(), "MMMM dd yyyy pp");

        const updatePost = {
            id,
            title: editTitle,
            body: editBody,
            postPhoto: editPhoto,
            datetime,
        };
        try {
            // const res = await api.put(`/posts/${id}`, updatePost);

            setPosts(posts.map((post) => (post.id === id ? { ...updatePost } : post)));
            setEditTitle("");
            setEditBody("");
            setEditPhoto("");
            history.push(`/post/${id}`);
        } catch (error) {
            console.log(error);
        }
    };
    return <main className='new-post'>
        {editTitle ?
            <>
                <div className='new-post-image'>
                    <img className='new-post-thumb' src={editPhoto} alt='' />
                </div>
                <form onSubmit={e => e.preventDefault()}>
                    <div className='form-group'>
                        <label htmlFor='title'>title:</label>
                        <input required type='text' id='title' placeholder='Post title'
                            value={editTitle}
                            onChange={e => setEditTitle(e.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='title'>body:</label>
                        <textarea required id='body' placeholder='Start writing here...'
                            onChange={e => setEditBody(e.target.value)}
                            value={editBody}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='imgFile'></label>
                        <input type='text' id='imgFile'
                            value={editPhoto}
                            onChange={e => setEditPhoto(e.target.value)}
                        />
                    </div>

                    <button type='submit'
                        onClick={() => handleEdit(post.id)} className='new-post-btn'>Submit</button>
                </form>
            </>
            : <>
                <h2>Post not found</h2>
                <Link to='/'>Go back home</Link>
            </>
        }

    </main>;
};

export default EditPost;
