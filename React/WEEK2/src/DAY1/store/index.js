import {createStore} from '../redux';

function counter(state = {number: 0}, action) {
    switch (action.type) {
        case 'ADD':
            return {number: state.number + action.count};
        case 'MINUS':
            return {number: state.number - action.count};
    }
    return state;
}

function todo(state = [], action) {
    switch (action.type) {
        case 'ADDTODO':
            return [...state.action.content]
    }
    return state
}


let combineReducers = (reducers) => {
    return (state={}, action) => {
        let obj = {};
        for (let key in reducers) {
            obj[key] = reducers[key](state[key],action);
        }
        return obj
    }

};

let reducer = combineReducers({
    counter:counter, todo:todo
});

export default createStore(reducer);
