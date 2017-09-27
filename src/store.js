import { createStore } from 'redux';

function reducer(state, action){

console.log('add stocks')
if(action.type === 'ADD_STOCK'){
    return {
        stocks: action.payload,
        tracked: state.tracked
    }

}
console.log('tracked')
if(action.type === 'TRACK_STOCK'){
    return {
        stocks: state.stocks,
        tracked: state.tracked.concat(action.payload)
    }
}
    return state;
}

export default createStore(reducer,{
    stocks: [],
    tracked: []
})
