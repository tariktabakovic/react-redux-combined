// Actions best practice #2 constants
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const RED = 'RED';
export const GREEN = 'GREEN';
export const ORANGE = 'ORANGE';

// Actions best practice 
export function actionIncrement(){
    return({
        type: INCREMENT
    })
}

export function actionDecrement(){
    return({
        type: DECREMENT
    })
}

export function actionReset(){
    return ({
        type: RESET
    })
}

export function actionChangeEvenColor(){
    return ({
        type: RED
    })
}

export function actionChangeOddColor(){
    return ({
        type: GREEN
    })
}

export function actionChangeColorDivisible(){
    return ({
        type: ORANGE
    })
}