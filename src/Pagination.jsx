import React, { useContext } from 'react';
import DataContext from './context/DataContext';

const Pagination = () => {
    const { pages, handleClick, currentPage,
        maxPageNumber,
        minPageNumber, handleNextClick,
        handlePreClick } = useContext(DataContext)

    return (
        <nav className='pagination'>
            <ul className='pagination-links'>
                <li
                    className={`${currentPage === pages[0] ? 'disabled' : ''}`}
                >
                    <button onClick={handlePreClick}
                        disabled={currentPage === pages[0] ? true : false}
                    >&lt;</button>
                </li>

                {pages.map(page => {
                    if (page < maxPageNumber + 1 && page > minPageNumber) {
                        return <li
                            key={page}
                            onClick={e => handleClick(page)}
                            className={`${currentPage === page ? "active" : ''} `}
                        >{page}</li>
                    }
                    else {
                        return null
                    }
                })}

                <li
                    className={`${currentPage === pages.length ? 'disabled' : ''}`}
                >
                    <button
                        onClick={handleNextClick}
                        disabled={currentPage === pages.length ? true : false}
                    >&gt;</button>
                </li>
            </ul>
        </nav>);
};

export default Pagination;
