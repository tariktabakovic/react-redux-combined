import {
    connect
} from 'react-redux';

import Counter from '../components/Counter';
import { 
    actionIncrement, 
    actionDecrement, 
    actionReset } 
from '../actions';

// Describe how to translate redux state into react props.
function mapStateToProps(state){
    console.table(state)
    return {
        count: state
    }
}

// Describe how to translate redux dispatch into react props. 
function mapDispatchToProps(dispatch){
    return {
        handleIncrement: ()=> {
            // they gave me dispatch as props so I can just call it
            dispatch(actionIncrement());
        },
        handleDecrement: ()=> {
            dispatch(actionDecrement());
        },
        handleReset: () => {
            dispatch(actionReset());
        }
    }
}

const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
export default reduxConnector(Counter);