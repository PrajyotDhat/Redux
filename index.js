// console.log("hello");

import {applyMiddleware, createStore} from 'redux';

import logger from 'redux-logger';

// 1)- to use store

const store = createStore(reducer,applyMiddleware(logger));

const history =[];

// 2)-reducer
function reducer(state={amount:1},action){

    // immutable-should not change directly state

    if(action.type==='increment'){
         return {amount:state.amount+1}
    }

    if(action.type==='decrement'){
        return {amount:state.amount-1}
   }

   if(action.type==='incrementByAmount'){
    return {amount:state.amount+action.payload}
}

    return state;

}

// to check global state

// console.log(store.getState());

// to minimize console.log every time when state updates

// store.subscribe(()=>{
//     history.push(store.getState());
//     console.log(history);
// })

// Action creators

function increment(){
   return {type:'increment'};
}

function decrement(){
    return {type:'decrement'};
 }

// using time interval 
setInterval(()=>{
    store.dispatch(increment());
},3000)


