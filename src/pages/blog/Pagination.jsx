
import React from 'react';

const Pagination = ({ onPageChange, blogs, currentPage, pageSize }) => {
    const totalPages = Math.ceil(blogs.length / pageSize);
  
    const renderPaginatLinks = () => {
        return Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
            <li key={pageNumber} className={pageNumber === currentPage ? "activePagination" : ""}>
                <a href="#" onClick={() => onPageChange(pageNumber)}>{pageNumber}</a>
            </li>
        ));
    };

    return (
        <div>
            <ul className='pagination flex-wrap my-8 gap-4'>
                <li>
                    <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                </li>
                {renderPaginatLinks()}
                <li>
                    <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;



