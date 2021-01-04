import { combineReducers, compose, applyMiddleware, createStore } from 'redux';
import LibraryReducer from './LibraryReducer';
import thunk from 'redux-thunk';

const appReducers = combineReducers({
    LibraryReducer
})

const rootReducer = (state, action) => {
    return appReducers(state, action)
}

export default createStore(rootReducer, compose(applyMiddleware(thunk)));