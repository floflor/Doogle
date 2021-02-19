import React from 'react';
import { connect } from 'react-redux';

function Card({res}) {
   

    return (
        <div>
         
         {res && res.map(c =>
         
                <p key={c.id}>
                    {c.name}
                </p>)
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {
      
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);