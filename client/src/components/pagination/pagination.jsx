import React from 'react';
import Styles from './pagination.module.css';

export default function Pagination({ resultsPerPage, totalResults, paginate }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalResults / resultsPerPage); i++) {
        pageNumbers.push(i);
    }
    

    return (
        <nav className={Styles.divPag}>
            
            <ul className={Styles.ul}>
                {pageNumbers.length>1 && pageNumbers.map(number => (
                    <li className={Styles.li} key={number} onClick={()=> paginate(number)}>
                            {number}
                        </li>
                   
                   ))}
            
                   </ul>
        </nav>
    )
}