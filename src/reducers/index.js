import { combineReducers, createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import fileReducer from './fileReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    user: userReducer,
})

 export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))