import React from 'react';
import imgNotFound from '../../images/imgNotFound.png'
import Styles from './card.module.css'
import { Link } from 'react-router-dom';
import Error from '../notfound/notfound'



export default function Card({ res}) {
 
    if (res.error){
     <Error></Error>
    }
    console.log(res);

<<<<<<< HEAD


=======
>>>>>>> 2c69234076faf681c9731bbeb8be2a7814842ee5
    console.log(res)
    return (
        <div>
            <div className={Styles.containerCards}>
                {res && res.map(c =>
                    <Link className={Styles.link} to={`/detail/${c.id}`}>
                        <div className={Styles.divCard}>
                            <div className={Styles.separate}>
                                <p className={Styles.title} >Breed: {c.name}</p>
                                <p className={Styles.temp} key={c.name}>Temperament: {c.temperaments}.</p>
                            </div>
                            {c.img === 'error' ? <img className={Styles.image} src={imgNotFound} alt="Not found" /> :
                                <img className={Styles.image} key={c.reference_image_id} src={c.img} alt={c.name} />}

                        </div>
                    </Link>
                )}
            </div>
        </div>
    )
}