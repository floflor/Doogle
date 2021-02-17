import React from 'react';
import Logo from '../../images/doogleLogo.png';
import Styles from './Landing.module.css';
import SearchBar from '../searchBar/searchBar';

export default function Landing(){
    return (
     <div className={Styles.mainDiv}>
         <div className={Styles.secondDiv}>
             <img src={Logo} className={Styles.img} alt='Logo Doogle'/>
             <SearchBar></SearchBar>
             <div className={Styles.buttonDiv}>
             <button className={Styles.btn}>Create your own</button>
             <button className={Styles.btn}>About Doogle</button>
             </div>
         </div>
     </div>
    )
}