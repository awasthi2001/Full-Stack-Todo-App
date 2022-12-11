import {applyMiddleware, combineReducers, legacy_createStore as createstore} from'redux';
import { reduce } from './reduce';
import thunk from 'redux-thunk'
import { AuthReducer } from './AuthRedux/reducer';
const rootreducer = combineReducers({
    Todo : reduce,
    Auth : AuthReducer
})
const middleware = applyMiddleware(thunk)

export const store = createstore(rootreducer,middleware)