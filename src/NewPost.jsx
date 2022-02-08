import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'
import { format } from 'date-fns'

const NewPost = ({ posts, setPosts }) => {
    let history = useHistory();

    const [postTitle, setPostTilte] = useState("");
    const [postBody, setPostBody] = useState("");
    const [postPhoto, setPostPhoto] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = uuidv4()
        const datetime = format(new Date(), 'MMMM dd yyyy pp')

        const newPost = {
            id,
            title: postTitle,
            body: postBody,
            postPhoto: postPhoto,
            datetime
        }

        await axios.post('http://localhost:3500/posts', newPost)

        const allPost = [...posts, newPost]

        setPosts(allPost)
        setPostTilte("");
        setPostBody("");
        history.push("/");
    };
    return (
        <main className='new-post'>
            <div className='new-post-image'>
                <img className='new-post-thumb' src={postPhoto ? postPhoto : ''} alt='' />
            </div>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='title'>title:</label>
                    <input required type='text' id='title' placeholder='Post title' onChange={e => setPostTilte(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor='title'>body:</label>
                    <textarea required id='body' placeholder='Start writing here...'
                        onChange={e => setPostBody(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor='imgFile'></label>
                    <input type='text' id='imgFile' onChange={e => setPostPhoto(e.target.value)} />
                </div>

                <button type='submit' className='new-post-btn'>Submit</button>
            </form>
        </main>
    );
};

export default NewPost;
