import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getDetail } from '../../actions/actions';
import Styles from './detail.module.css';
import Error from '../notfound/notfound'

function Detail({ getDetail, match, details }) {


    useEffect(() => {
        const id = match.params.id


        getDetail(id)
    }, []);

    if(details.error){
        return <Error></Error>
    }

    else if (details && details[0]) {
        return (

            <div className={Styles.containerPage}>
                <div className={Styles.containerDetails}>
                <div className={Styles.textContainer}>
                    <h1>Breed: {details[0].breeds[0].name}</h1>
                    <p>Temperament: {details[0].breeds[0].temperament}</p>
                    <p>Height (metric): {details[0].breeds[0].height.metric}</p>
                    <p>Weight (metric): {details[0].breeds[0].weight.metric} </p>
                    <p>Life-Span: {details[0].breeds[0].life_span} </p>
                </div>
                <img className={Styles.image} src={details[0].url} alt={details[0].breeds[0].name}></img>
                </div>
            </div>
        )
        
<<<<<<< HEAD
    }
    return <div>Loading...</div>
=======
    } else { 
        return(
            
             <div>Loading...</div>) 
    }
>>>>>>> 4534a1c9fd42f80fcf2d831b72c74f7859e79ea5
}

function mapStateToProps(state) {

    return {
        details: state.details
    }
}

function mapDispatchToProps(dispatch) {


    return {
        getDetail: id => { dispatch(getDetail(id)) },

    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Detail);