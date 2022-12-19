// import {combineReducers, createStore} from 'redux'
// import counterReducer from './reducers/counterReducer'


// const reducers = combineReducers({
//   counter:counterReducer
 
// })


// const store = createStore(reducers)

// export default store
import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './features/CartSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice
  },
});