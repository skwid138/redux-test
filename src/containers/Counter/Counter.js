import React, { Component } from 'react';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as actionTypes from '../../store/actions';
import { connect } from 'react-redux';

class Counter extends Component {
	render () {
        return (
            <div>
                <CounterOutput value={ this.props.ctr } />
                <CounterControl label="Increment" clicked={ this.props.onIncrementCounter } />
                <CounterControl label="Decrement" clicked={ this.props.onDecrementCounter }  />
                <CounterControl label="Add 5" clicked={ this.props.onAddCounter }  />
                <CounterControl label="Subtract 5" clicked={ this.props.onSubtractCounter }  />
				<hr/>
				<button onClick={ () => this.props.onStoreResult(this.props.ctr) }>Store Result</button>
				<ul>
					{ this.props.storedResults.map(result => (
						<li key={ result.id } onClick={ () => this.props.onDeleteResults(result.id) }>{ result.value }</li>
					)) }
				</ul>
            </div>
        );
    }
}


/* Because state can be massive and there could be many actions to be efficient connect will only take a subset that we need it to */

/* Map redux state to react props */
//* The state argument is the state from redux */
const mapStateToProps = state => {
	return {
		ctr: state.ctr.counter,
		storedResults: state.res.results,
	}
}

/* This adds actions to props - which are essentially the functions that manipulate the state */
const mapDispatchToProps = dispatch => {
	return {
		onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
		onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
		onAddCounter: () => dispatch({type: actionTypes.ADD, payload: {value: 5}}),
		onSubtractCounter: () => dispatch({type: actionTypes.SUBTRACT, payload: {value: 5}}),
		onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, payload: {result: result}}),

		//* wrapping the action in an anonymous function allows arguments to be passed in
		onDeleteResults: id => dispatch({type: actionTypes.DELETE_RESULT, payload: {id: id}}),
	}
}

/* connect is a function that returns a higher order function which accepts the component as an argument */
/* if state is not needed pass null, if actions are not needed the argument is optional */
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
