import React from 'react';
import { connect } from 'react-redux';

export function MainPage({resultsbyName}) {
    

    return (
        <div>
            {console.log(resultsbyName)}
            {resultsbyName && resultsbyName.map(c => <div>{c.name}</div>)} 
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