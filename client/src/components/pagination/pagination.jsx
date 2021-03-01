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
<<<<<<< HEAD
                {  pageNumbers.map(number => (
=======
                {pageNumbers.length>1 && pageNumbers.map(number => (
>>>>>>> 2c69234076faf681c9731bbeb8be2a7814842ee5
                    <li className={Styles.li} key={number} onClick={()=> paginate(number)}>
                            {number}
                        </li>
                   
                   ))}
            
                   </ul>
        </nav>
    )
}