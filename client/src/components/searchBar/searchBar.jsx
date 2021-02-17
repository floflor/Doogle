import React from 'react';
import { connect } from 'react-redux';
import Styles from './SearchBar.module.css';
import {searchDogByName} from '../../actions/actions';

export function SearchBar({resultsbyName, searchBar, searchDogByName}) {
    const [input, setInput] = React.useState('');

    function handleInputChange(e) {
        setInput(e.target.value)
    }

    
    function handleSubmit(e){
        e.preventDefault();
        searchDogByName(input);
    } 

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input onChange={handleInputChange} className={Styles.inpt} type="text"></input>
            <button className={Styles.btnIn}>X</button>
            <button >B</button>
        </form>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        resultsbyName: state.resultsbyName
    }

}


function mapDispatchToProps(dispatch) {
    return {
        searchDogByName: name =>{ dispatch(searchDogByName(name))},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);


