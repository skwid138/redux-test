/**
 * It is typical to have a store directory next to components and containers in a react project
 * This is used to hold reducers
 */

 import * as actionTypes from './actions';

 const initialState = {
	 counter: 0,
	 results: [],
 }

 /* MAKE SURE TO IMMUTABLY UPDATE STATE */
 const reducer = (state = initialState, action) => {

	switch (action.type) {
		case actionTypes.INCREMENT:
			return {...state, counter: state.counter + 1};
		case actionTypes.DECREMENT:
			return {...state, counter: state.counter - 1};
		case actionTypes.ADD:
			return {...state, counter: state.counter + action.payload.value};
		case actionTypes.SUBTRACT:
			return {...state, counter: state.counter - action.payload.value};
		case actionTypes.STORE_RESULT:
			return {...state, results: state.results.concat({id: new Date(), value: state.counter})};
		case actionTypes.DELETE_RESULT:
			return {...state, results: state.results.filter(result => result.id !== action.payload.id)};
		default:
			return state;
	}
 }

 export default reducer;