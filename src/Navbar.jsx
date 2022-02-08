import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ search, setSearch }) => {
    return (
        <nav className='nav'>
            <div className='nav-logo'>
                <h2>MyBlog</h2>
            </div>
            <ul className='nav-links-container'>
                <li>
                    <Link to='/' className='nav-link'>home</Link>
                </li>
                <li>
                    <Link to='/' className='nav-link'>about</Link>
                </li>
                <li>
                    <Link to='/' className='nav-link'>contact</Link>
                </li>
            </ul>
            <div className='search'>
                <form className='search-form' onSubmit={e => e.preventDefault()}>
                    <input type='text' id='search' placeholder='search' className='search-box'
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                    <button className='search-btn'>search</button>
                </form>

            </div>
        </nav>);
};

export default Navbar;
