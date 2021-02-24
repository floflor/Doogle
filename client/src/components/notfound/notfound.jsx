import React from 'react';
import ErrorImg from '../../images/404.png';
import Styles from './notfound.module.css';

export default function Error (){
    return (
        <div className={Styles.containerError}>
            <img  className={Styles.imgError} src={ErrorImg} alt="404 Not Found"/>
        </div>
    )
}