import React from 'react';
import Logo from '../../images/doogleLogo.png';
import Styles from './Landing.module.css';
import { useHistory } from 'react-router';
import SearchBar from '../searchBar/searchBar';


export default function Landing(){
    const history = useHistory();
    return (
     <div className={Styles.mainDiv}>
         <div className={Styles.secondDiv}>
             <img src={Logo} className={Styles.img} alt='Logo Doogle'/>
            
             <div className={Styles.buttonDiv}>
                 <SearchBar/>
        
             </div>
         </div>
     </div>
    )
}


