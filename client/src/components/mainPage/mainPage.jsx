import React from 'react';
import { connect } from 'react-redux';

 function MainPage({resultsbyName}) {
    

    return (
        <div>
            <h1>hola</h1>  
            {console.log(resultsbyName)}
            {resultsbyName && resultsbyName.map(c => <div><p>{c.name}</p></div>)} 
        </div>

    )
}

function mapStateToProps(state) {
    
    return {
        resultsbyName: state.resultsbyName,        
    }

}


function mapDispatchToProps(dispatch) {
    return {
      
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);