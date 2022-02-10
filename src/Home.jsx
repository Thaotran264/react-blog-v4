import React, { useContext } from 'react';
import DataContext from './context/DataContext';
import Feed from './Feed';
import Footer from './Footer';
import Header from './Header';
import Pagination from './Pagination';

const Home = () => {
    const { currentPosts, posts } = useContext(DataContext)
    return (
        <>
            <Header posts={posts} />
            <main className='home'>
                <h2 className='home-title'>Posts</h2>
                {currentPosts.length
                    ? (<Feed />)
                    : (<h2 style={{ textAlign: 'center' }}>No posts to display</h2>)
                }
                <Pagination />

            </main>
            <Footer />
        </>
    );
};

export default Home;
