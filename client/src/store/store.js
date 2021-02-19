import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';




const initialState = {
    resultsbyName: []
  
}

const reducer = function (state = initialState, action) {
    switch (action.type) {
        case 'GET_DOG_BY_NAME':
            
            return {

                resultsbyName: action.payload
            }


        default:
            return state
    }
}



export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));