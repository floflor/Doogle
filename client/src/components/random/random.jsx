import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRandom } from '../../actions/actions';
import Error from '../../images/imgNotFound.png';
import Styles from './random.module.css';



function Random({ getRandom, random }) {
    useEffect(() => {
        getRandom();
    }, []);

    return (

        <div className={Styles.randomDiv}>

            {random && <div className={Styles.titleDiv}>
                <h1>Welcome to Doogle!</h1>
                <p className={Styles.subT}>We suggest you to start by searching your favorite dog...
                   </p></div>}

            <div className={Styles.allTheCards}>
                {random && random.map((r, index) =>
                    <div key={index} className={Styles.randomCards}>
                        <p key={r.id}>{r.name}</p>
                        {!r.image ? <img className={Styles.image} src={Error} alt="Not found" /> :
                            <img className={Styles.image} key={r.image.id} src={r.image.url} alt={r.name} />}

                    </div>
                )}
            </div>
        </div>

    )
}

function mapStateToProps(state) {
    return {
        random: state.random,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getRandom: () => { dispatch(getRandom()) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Random);