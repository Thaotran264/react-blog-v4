import React from 'react';
import Feed from './Feed';
import Footer from './Footer';
import Header from './Header';

const Home = ({ posts }) => {

    return (
        <>
            <Header />
            <main className='home'>
                {posts.length
                    ? (<Feed posts={posts} />)
                    : (<h2 style={{ textAlign: 'center' }}>No posts to display</h2>)
                }
            </main>
            <Footer />
        </>
    );
};

export default Home;
