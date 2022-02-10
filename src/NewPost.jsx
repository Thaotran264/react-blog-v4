import { format } from "date-fns";
import React, { useContext, useState } from 'react';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { v4 as uuidv4 } from "uuid";
import api from './api/posts'
import DataContext from "./context/DataContext";

const NewPost = () => {
    const history = useHistory();

    const { posts, setPosts } = useContext(DataContext)
    const [postTitle, setPostTilte] = useState("");
    const [postBody, setPostBody] = useState("");
    const [postPhoto, setPostPhoto] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = uuidv4();
        const datetime = format(new Date(), "MMMM dd yyyy pp");

        const newPost = {
            id,
            title: postTitle,
            body: postBody,
            postPhoto: postPhoto,
            datetime,
        };
        const allPost = [...posts, newPost];

        setPosts(allPost);
        setPostTilte("");
        setPostBody("");
        setPostPhoto("");
        history.push("/");
        // try {
        //     const res = await api.post("/posts", newPost);
        //     const allPost = [...posts, res.data];

        //     setPosts(allPost);
        //     setPostTilte("");
        //     setPostBody("");
        //     history.push("/");
        // } catch (error) {
        //     console.log(error);
        // }
    };
    return (
        <main className='new-post'>
            <div className='new-post-image'>
                <img className='new-post-thumb' src={postPhoto} alt='' />
            </div>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='title'>title:</label>
                    <input required type='text' id='title' placeholder='Post title'
                        value={postTitle}
                        onChange={e => setPostTilte(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor='title'>body:</label>
                    <textarea required id='body' placeholder='Start writing here...'
                        value={postBody}
                        onChange={e => setPostBody(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor='imgFile'></label>
                    <input type='text' id='imgFile'
                        value={postPhoto}
                        onChange={e => setPostPhoto(e.target.value)} />
                </div>

                <button type='submit' className='new-post-btn'>Submit</button>
            </form>
        </main>
    );
};

export default NewPost;
