import React from 'react';
import { connect } from 'react-redux';
import {searchDogByName} from '../../actions/actions';
import Styles from '../mainPage/mainPage.module.css';
import SearchIcon from '../../images/searchicon.svg';
import { useHistory } from 'react-router';

 function SearchBar({searchDogByName}) {
    const [input, setInput] = React.useState('');

    function handleInputChange(e) {
        setInput(e.target.value)
    }

    const history = useHistory();
    
    function handleSubmit(e){

        e.preventDefault();
        history.push('/search');
        searchDogByName(input);
    } 


    return (
        <div className={Styles.searchBarDiv}>
        <form onSubmit={handleSubmit} className={Styles.formStyle}>
            <input placeholder='Search your favorite doggos...' className={Styles.inpt} onChange={handleInputChange} type="text"/>
            <button onClick={handleSubmit} className={Styles.btn}>
            <img className={Styles.icon} src={SearchIcon}></img>
            </button>
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


