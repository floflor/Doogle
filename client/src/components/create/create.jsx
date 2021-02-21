import React, { useEffect, useState } from 'react';
import { getTemperaments } from '../../actions/actions';
import { connect } from 'react-redux';
import Styles from './create.module.css';


function Create({getTemperaments, temps}) {
 useEffect(()=>{
     getTemperaments();
 },[])

    const [input, setInput] = useState({
        name: '',
        weight: '',
        height: '',
        life_span: '',
        temps: ''
    });

    function handleInputChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    function submit() {
        fetch('http://localhost:3001/dog', {
            method: 'POST',
            body: JSON.stringify(input),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        fetch('')
    }

    function handleSelectChange(e){
        setInput({
            ...input,
            temps: e.target.value
        })
    }

    
    

    return (
        <div className={Styles.createPage}>
            <h1>Create a Doggo!</h1>

            <form className={Styles.createContainer} onSubmit={submit}>
                <label for="Name">Name</label>
                <input className={Styles.input} onChange={handleInputChange} type='text' name='name' placeholder='Put a name...' required />


                <label for="Weight">Weight</label>
                <input className={Styles.input} onChange={handleInputChange} name='weight' placeholder='weight' type='number' required />

                <label for="Height">Height</label>
                <input className={Styles.input} onChange={handleInputChange} name='height' placeholder='Height' type='number' required />

                <label for="LifeSpan">Life Span</label>
                <input className={Styles.input} onChange={handleInputChange} type='number' name='life_span' placeholder='Life Span' required />
               
                <select onChange={handleSelectChange}>
                    <option>Select</option>
                 {temps && temps.map(t => <option className={Styles.options} value={t.name}>{t.name}</option>)}      
                </select>

                <button className={Styles.btn} onSubmit={submit}>Submit</button>
            </form>

        </div>
    )
}

const mapStateToProps = state => ({
    temps : state.temps
   })
   
   
   function mapDispatchToProps(dispatch) {
       return {
        getTemperaments: () =>{ dispatch(getTemperaments())},      
       }
   }
   
export default connect(mapStateToProps, mapDispatchToProps)(Create);