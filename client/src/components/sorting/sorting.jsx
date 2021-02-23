//  ascendente/descendente alfabetico y peso
import { connect } from 'react-redux';
import { setSort } from '../../actions/actions';
import React, { useState } from 'react';

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

    return (
        <div>

            <form onSubmit={handleSubmit}>

                <select onChange={handleSelectChange} name="alphabetical">
                    <option>Alphabetical</option>
                    <option value='az' name='az'>A-Z</option>
                    <option value='za' name='za'>Z-A</option>
                </select>

                <select onChange={handleSelectChange} name="weight">
                    <option >Weight</option>
                    <option name='increasing' value='increasing'>Increasing</option>
                    <option value='descending' name='descending'>Descending</option>
                </select>

                <button type='submit'>Set Sort</button>

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