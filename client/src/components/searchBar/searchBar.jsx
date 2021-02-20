import React from 'react';
import { connect } from 'react-redux';
import {searchDogByName} from '../../actions/actions';
import Styles from '../mainPage/mainPage.module.css';

 function SearchBar({searchDogByName}) {
    const [input, setInput] = React.useState('');

    function handleInputChange(e) {
        setInput(e.target.value)
    }

    
    function handleSubmit(e){
        e.preventDefault();
        searchDogByName(input);
    } 


    return (
        <div className={Styles.searchBarDiv}>
        <form onSubmit={handleSubmit} className={Styles.formStyle}>
            <input placeholder='Search your favorite doggos...' className={Styles.inpt} onChange={handleInputChange} type="text"/>
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


