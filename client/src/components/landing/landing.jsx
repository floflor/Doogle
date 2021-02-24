import React from 'react';
import Logo from '../../images/doogleLogo.png';
import Styles from './Landing.module.css';
import { useHistory } from 'react-router';


export default function Landing(){
    const history = useHistory();
    return (
     <div className={Styles.mainDiv}>
         <div className={Styles.secondDiv}>
             <img src={Logo} className={Styles.img} alt='Logo Doogle'/>
            
             <div className={Styles.buttonDiv}>
             <button onClick={()=>history.push('/home')} className={Styles.btn}>Home</button>
             </div>
         </div>
     </div>
    )
}


