//  ascendente/descendente alfabetico y peso
import { connect } from 'react-redux';
import { setSort } from '../../actions/actions';
import React, { useState } from 'react';
import Styles from '../filters/filters.module.css';

function Sorting({ setSort }) {

    //DEFINING HOOKS FOR SELECT STATES
    const [select, setSelect] = useState({
        alphabetical: '',
        weight: ''

    })


    //HANDLING CHANGE 
    function handleSelectChange(e) {
        e.preventDefault();

        setSelect({
            ...select,
            [e.target.name]: e.target.value
        });
    }

    //HANDLING SUBMIT (FILTERS SET UP)
    function handleSubmit(e) {
        e.preventDefault();
        setSort(select)
    }

<<<<<<< HEAD
    
=======
    //TOGGLE
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };
>>>>>>> 4534a1c9fd42f80fcf2d831b72c74f7859e79ea5


    return (
        <div className={Styles.containerFilters}>

            <form className={Styles.form} onSubmit={handleSubmit}>

                <select className={Styles.select} onChange={handleSelectChange} name="alphabetical">
                    <option value=''>Alphabetical</option>
                    <option value='az' name='az'>A-Z</option>
                    <option value='za' name='za'>Z-A</option>
                </select>

                <select className={Styles.select} onChange={handleSelectChange} name="weight">
                    <option value=''>Weight</option>
                    <option name='increasing' value='increasing'>Increasing</option>
                    <option value='descending' name='descending'>Descending</option>
                </select>

<<<<<<< HEAD
                <button className={Styles.btnSubmit} type='submit'>Set Sort</button>
=======
                <button className={isActive ? Styles.btnActive : Styles.btnSubmit}
                    onClick={toggleClass} type='submit'>Set Sort</button>
>>>>>>> 4534a1c9fd42f80fcf2d831b72c74f7859e79ea5

            </form>

        </div>
    )
}

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
        setSort: (sort) => { dispatch(setSort(sort)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sorting);