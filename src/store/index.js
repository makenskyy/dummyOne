import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import { productReducer } from './productReducer';

export const rootReducer = combineReducers({
  productReducer: productReducer,
})

export const store = createStore(rootReducer, composeWithDevTools());