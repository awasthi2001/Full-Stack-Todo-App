import {applyMiddleware, legacy_createStore as createstore} from'redux';
import { reduce } from './reduce';
import thunk from 'redux-thunk'

const middleware = applyMiddleware(thunk)

const store = createstore(reduce,middleware)