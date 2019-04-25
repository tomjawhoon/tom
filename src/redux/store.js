import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import ProductReducer from './product/reducer';
import InputReducer from './input/reducer';

const reducers = combineReducers({
    Product: ProductReducer,
    Input: InputReducer
})

export default createStore(reducers, applyMiddleware(thunk));