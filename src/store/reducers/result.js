/**
 * It is typical to have a store directory next to components and containers in a react project
 * This is used to hold reducers
 */

 import * as actionTypes from '../actions';

 const initialState = {
	 results: [],
 }

 /* MAKE SURE TO IMMUTABLY UPDATE STATE */
 const reducer = (state = initialState, action) => {

	switch (action.type) {
		case actionTypes.STORE_RESULT:
			return {...state, results: state.results.concat({id: new Date(), value: action.payload.result})};
		case actionTypes.DELETE_RESULT:
			return {...state, results: state.results.filter(result => result.id !== action.payload.id)};
		default:
			return state;
	}
 }

 export default reducer;