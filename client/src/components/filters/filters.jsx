// temperamento, raza exitente o creada por nosotros, ascendente/descendente alfabetico y peso
import { connect } from 'react-redux';
import { setFilters } from '../../actions/actions';
import React, { useState } from 'react';

function Filters({ setFilters, activeFilters }) {

    const [menu, setMenu] = useState(false);

    function handleClick(e) {
        e.preventDefault();
        if (menu === false) {
            setMenu(true);
        } else {
            setMenu(false);
        }
    }

    const [select, setSelect] = useState({
        temperament: '',
        breed: ''
 
    })



    function handleSelectChange(e) {
        e.preventDefault();

        setSelect({
            ...select,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setFilters(select)
    }




    return (
        <div>

            <form onSubmit={handleSubmit}>
                <select onChange={handleSelectChange} name="temperament">
                    <option>Temperament</option>
                    <option value='Gentle' name='Gentle'>Gentle</option>
                    <option value='Active' name='Active'>Active</option>
                    <option value='Intelligent' name='Intelligent'>Intelligent</option>
                    <option value='Friendly' name='Friendly'>Friendly</option>
                    <option value='Alert' name='Alert'>Alert</option>


                </select>

                <select onChange={handleSelectChange} name="breed">
                    <option >Breed</option>
                    <option name='Existent' value='Existent'>Existent</option>
                    <option value='Created by me' name='Created by me'>Created by me</option>
                </select>

                

                <button type='submit'>SUBMIT</button>

            </form>


        </div>
    )
}

function mapStateToProps(state) {
    return {
        activeFilters: state.activeFilters
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setFilters: (filters) => { dispatch(setFilters(filters)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);