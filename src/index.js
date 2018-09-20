import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/* Provider takes a prop called store, it wraps the react app and lets us access the store */
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

/* Combine multiple reducers before passing them into createStore() */
const rootReducer = combineReducers({
	ctr: counterReducer,
	res: resultReducer,
});

const store = createStore(rootReducer);

ReactDOM.render(
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
