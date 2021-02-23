import React from 'react';
import imgNotFound from '../../images/imgNotFound.png'
import Styles from './card.module.css'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


function Card({ res, activeFilters }) {



    return (
        <div>
            <div className={Styles.containerCards}>
                {res && res.map(c =>
                    <Link className={Styles.link} to={`/detail/${c.id}`}>
                        <div className={Styles.divCard}>
                            <div className={Styles.separate}>
                                <p className={Styles.title} key={c.id}>Breed: {c.name}</p>
                                <p className={Styles.temp} key={c.name}>Temperament: {c.temperament}.</p>
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
function mapStateToProps(state){
    return{
        activeFilters: state.activeFilters
    }
}
function mapDispatchToProps(dispatch){
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);