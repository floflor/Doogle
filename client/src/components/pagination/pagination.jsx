import React from 'react';
import Styles from './pagination.module.css';

export default function Pagination({ resultsPerPage, totalResults, paginate }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalResults / resultsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className={Styles.divPag}>
            
                {pageNumbers.map(number => (
                    
                        <button className={Styles.btn} key={number} onClick={()=> paginate(number)}>
                            {number}
                        </button>
                   
                ))}
            
        </nav>
    )
}