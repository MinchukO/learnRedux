import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { amountReducer, actions as amountActions} from './amount';
import { goodsReducer, actions as goodsAction } from './goods';
import {
  positionReducer,
  actions as positionAction,
  getX,
  getY} from "./position";

//Селектор
export function getAmount(state) {
  return state.amount
}

//Селектор составной - это функция умеет выбирать нужную часть sate'a
export function getPosition(state) {
  return {
    x: getX(state.position),
    y: getY(state.position)
  };
}

export function getDistanceTo(state, point) {
  const { x, y } = getPosition(state)
  return Math.abs(x - point.x) + Math.abs(y - point.y);
}

// возвращает true/false
export function hasEnoughMoney(state, payment) {
  return getAmount(state) >= payment
}

//createStore(initialState, reducer)
//const initialState = {
//  amount: 0,
//  goods: [],
//  position: {x: 0, y: 0},
//}

//служебный метод combineReducers
const reducer = combineReducers({
  amount: amountReducer,
  goods: goodsReducer,
  position: positionReducer,
});
 
const store = createStore(reducer, applyMiddleware(thunk));


// или если начинаем с 0 => const store = createStore(amountReducer);
//const store = createStore(100, amountReducer);
//const store2 = createStore(goodsReducer);
//const position = createStore(positionReducer)


//у нашего store есть методы diapatch, subscribe, getState
  //store.dispatch(amountActions.add(100));
  //store.dispatch(amountActions.take(60));
  //store.dispatch(amountActions.add(5));

  //store.dispatch(goodsAction.add("Apple"));

  //store.subscribe(() => {
  //  console.log(store.getState());
  //});


export default store;