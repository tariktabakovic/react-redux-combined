// Actions best practice #2 constants
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

// Actions best practice 
function actionIncrement(){
    return({
        type: 'INCREMENT'
    })
}

function actionDecrement(){
    return({
        type: 'DECREMENT'
    })
}

function actionReset(){
    return ({
        type: 'RESET'
    })
}
