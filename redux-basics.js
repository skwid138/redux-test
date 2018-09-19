/**
 * This is an example file showing how redux works without React
 * This is for running on Node and not made to be used on the client side
 */

const redux = require('redux');

/* Create Store */
//! allows the app to create a new store
const createStore = redux.createStore;


const initialState = {
	counter: 0,
}


/* Reducer */
//! The reducer combined with the store is the only thing that can update the state
// like PHP ES6 allows you to assign a default value to arguments
const rootReducer = (currentState = initialState, action) => {

	// avoid mutating the original state
	const updatedState = {...currentState};

	// Check for the corresponding action type
	switch (action.type) {
		case 'INC_COUNTER':
			updatedState.counter = currentState.counter + 1;
			break;
		case 'ADD_COUNTER':
			updatedState.counter = currentState.counter + action.value;
			break;
		default:
			break;
	}

	// return the new object to be used as state
	return updatedState;
};

/* Store */
//! a store must be initialized with a reducer (or reducers, if there are multiple they will be merged into one)
const store = createStore(rootReducer);
console.log('store.getState() #1 ->', store.getState());

/* Subscription */
//! subscriptions let you skip calling store.getState(), and instead inform you when state has changed
//! store.subscribe() takes an argument that is a FUNCTION to be called every time the state is updated
//* Must come after the store is created, but before the action dispatching
store.subscribe(() => {
	console.log('[Subscription]', store.getState())
});

/* Dispatching Action */
//! dispatch takes an object as an argument that MUST have a property of TYPE
//* type needs a STRING value (typically all upper case) which is used as a unique identifier
//! additional arbitrary properties may be added to the object as well
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log('store.getState() #2 ->', store.getState());


/* Console Output */
// store.getState() #1 -> { counter: 0 }
// [Subscription] { counter: 1 }
// [Subscription] { counter: 11 }
// store.getState() #2 -> { counter: 11 }