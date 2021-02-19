import React from 'react';

export default function Pagination({ resultsPerPage, totalResults, paginate }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalResults / resultsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            
                {pageNumbers.map(number => (
                    
                        <button key={number} onClick={()=> paginate(number)}>
                            {number}
                        </button>
                   
                ))}
            
        </nav>
    )
}