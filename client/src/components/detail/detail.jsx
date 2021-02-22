import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {getDetail} from '../../actions/actions';

function Detail ({getDetail, match ,details }){
    

    useEffect(()=>{
     const id = match.params.id
     
     
     getDetail(id) 
    }, []);
 

    if (details && details[0]){
        return(
            <div>
            <h1>{details[0].breeds[0].name}</h1>
            <p>{details[0].breeds[0].temperament}</p>
            <p>{details[0].breeds[0].height.metric}</p>
            <p>{details[0].breeds[0].weight.metric} </p>
            <p>{details[0].breeds[0].lifeSpan} </p>
            
            </div>
        )
    }else {return <div>Loading...</div>}
}

function mapStateToProps(state){
    
    return {
      details : state.details
    }
}

function mapDispatchToProps(dispatch){
    
    
    return{
       getDetail: id =>{ dispatch(getDetail(id))},
    
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Detail);