import { 
    INCREMENT, 
    DECREMENT, 
    RESET,
    RED,
    GREEN,
    ORANGE } 
from './actions';

//  Our ideal/default state is just a number: 
// 0
// 1 

export function count(state=0, action){
    let newState= state
    switch (action.type){
        case INCREMENT:
            newState += 1;
            break;
        case DECREMENT:
            newState -= 1;
            break;
        case RESET:
            newState= 0;
            break;
        case RED: 
            return {...state, color: 'red'};
            break;
        case GREEN:
            return {...state, color: 'green'};
            break;
        case ORANGE:
            return {...state, color: 'orange'};
            break;
        default:
            break;   
    }
    return newState;
};