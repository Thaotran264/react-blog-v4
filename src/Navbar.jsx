import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DataContext from './context/DataContext';

const Navbar = () => {
    const { search, setSearch } = useContext(DataContext)
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
                    <Link to='/about' className='nav-link'>about</Link>
                </li>
                <li>
                    <Link to='/contact' className='nav-link'>contact</Link>
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
