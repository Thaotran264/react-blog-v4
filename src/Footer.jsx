import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DataContext from './context/DataContext';
import { AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
    const { posts } = useContext(DataContext)
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='footer-items'>
                    <h2>Most recent</h2>
                    <ul className='footer-posts'>
                        {posts.slice(0, 5).map(post =>
                            <li key={post.id}>
                                <Link to={`/post/${post.id}`} className='footer-post'>{post.title}</Link>
                            </li>)}
                    </ul>
                </div>
                <div className='footer-items'>
                    <h2>contact me</h2>
                    <ul className='footer-socials'>
                        <li>
                            <Link to='/' className='footer-link'><AiFillFacebook /></Link>
                        </li>
                        <li>
                            <Link to='/' className='footer-link'><AiOutlineTwitter /></Link>
                        </li>
                        <li>
                            <Link to='/' className='footer-link'><BsInstagram /></Link>
                        </li>
                        <li>
                            <Link to='/' className='footer-link'><BsLinkedin /></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer >);
};

export default Footer;
