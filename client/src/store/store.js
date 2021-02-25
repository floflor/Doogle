import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';





const initialState = {
    resultsbyName: [],
    details : [],
    random : [],
    temps:[],
    activeFilters: {},
    activeSort: {}
    
}

const reducer = function (state = initialState, action) {
    switch (action.type) {
        case 'GET_DOG_BY_NAME':
            
            return {
                ...state,
                resultsbyName: action.payload
            }

        case 'GET_DETAIL':

            return{
                ...state,
                details : action.payload
            }

        case 'GET_RANDOM':
            return{
                ...state,
                random: action.payload
            }

        case 'GET_TEMPS':
            return{
               ...state, 
               temps: action.payload
            }

        case 'SET_FILTERS':

            return{
                ...state,
                activeFilters: action.payload
            }

        case 'SET_SORT':
            return{
                ...state, 
                activeSort: action.payload
            }


        default:
            return state
    }
}



export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));