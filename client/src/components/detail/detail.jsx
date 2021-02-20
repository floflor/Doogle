import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {getDetail} from '../../actions/actions';

function Detail ({getDetail, match ,details}){
    useEffect(()=>{
     const name = match.params.name
     
     getDetail(name)
    }, []);

    if (details && details[0]){
        return(
            <div>
            <h1>{details[0].name}</h1>
            <p>{details[0].temperament}</p>
            <p>{details[0].height.metric}</p>
            <p>{details[0].weight.metric} </p>
            <p>{details[0].lifeSpan} </p>
            
            </div>
        )
    }else {return <div>Loading...</div>}
}

function mapStateToProps(state){
    console.log(state);
    return {
      details : state.details
    }
}

function mapDispatchToProps(dispatch){
    
    return{
       getDetail: name =>{ dispatch(getDetail(name))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);