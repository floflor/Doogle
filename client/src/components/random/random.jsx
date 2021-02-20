import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRandom } from '../../actions/actions';
import Error from '../../images/imgNotFound.png';


function Random({ getRandom, random }) {

    useEffect(() => {

        getRandom();
    }, []);

    return (

        <div>
            <div>
                <h1>Welcome to Doogle!</h1>
                <p>We suggest you to start by searching your favorite doggo, if there's no results, you can
                create your own, have fun!
            </p>
            </div>
            {random && random.map((r, index) =>
                <div key={index}>
                    <p key={r.id}>Breed:{r.name}</p>
                    <p key={r.name}>Temperament: {r.temperament}.</p>
                    {!r.image ? <img src={Error} alt="Not found" /> :
                        <img key={r.image.id} src={r.image.url} alt={r.name} />}

                </div>
            )}
        </div>

    )
}

function mapStateToProps(state) {
    return {
        random: state.random
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getRandom: () => { dispatch(getRandom()) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Random);