import React from 'react';
import Styles from './pagination.module.css';

export default function Pagination({ resultsPerPage, totalResults, paginate }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalResults / resultsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className={Styles.divPag}>
            
            <ul>
                {pageNumbers.length>1 && pageNumbers.map(number => (
                    <li className={Styles.btn} key={number} onClick={()=> paginate(number)}>
                            {number}
                        </li>
                   
                   ))}
            
                   </ul>
        </nav>
    )
}