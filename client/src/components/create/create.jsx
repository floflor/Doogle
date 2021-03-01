import React, { useEffect, useState } from 'react';
import { getTemperaments } from '../../actions/actions';
import { connect } from 'react-redux';
import Styles from './create.module.css';
import { useForm } from "react-hook-form";


function Create({ getTemperaments, temps }) {
    useEffect(() => {
        getTemperaments();
    }, [])
    const { reset } = useForm();

    const [message, setMessage] = useState('');

    const [input, setInput] = useState({
        name: '',
        weight: '',
        height: '',
        life_span: '',
        temps:[]
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
        setMessage('Dog created!');
        reset();

    }

    function handleSelectChange(e) {
        setInput({
            ...input,
            temps: e.target.value
        })
    }
    const select = document.getElementById('select')

        let array = []
    function selected(){
        if (!array.includes(select.value)){        
            array.push(select.value)
        }else array = array.filter(a => a !== select.value)
           
        return setInput({...input, temps: [...input.temps, ...array]})
    }
    



    return (
        <div className={Styles.createPage}>
            <h1>Create a Doggo!</h1>
            <div className={Styles.alertCreated}>
                <p className={Styles.txt}>{message}</p>
            </div>

            <form className={Styles.createContainer} onSubmit={submit}>
                <label htmlFor="Name">Name</label>
                <input className={Styles.input} onChange={handleInputChange} type='text' name='name' placeholder='Put a name...' required />


                <label htmlFor="Weight">Weight</label>
                <input className={Styles.input} onChange={handleInputChange} name='weight' placeholder='weight' type='number' required />

                <label htmlFor="Height">Height</label>
                <input className={Styles.input} onChange={handleInputChange} name='height' placeholder='Height' type='number' required />

                <label htmlFor="LifeSpan">Life Span</label>
                <input className={Styles.input} onChange={handleInputChange} type='number' name='life_span' placeholder='Life Span' required />

                <select id='select' onChange={selected} required>
                    <option>Select</option>
                    {temps && temps.map((t, index) => <option key={index} className={Styles.options} value={t.name}>{t.name}</option>)}
                </select>

                <button className={Styles.btn} onSubmit={submit}>Submit</button>
            </form>

        </div>
    )
}

const mapStateToProps = state => ({
    temps: state.temps
})


function mapDispatchToProps(dispatch) {
    return {
        getTemperaments: () => { dispatch(getTemperaments()) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Create);