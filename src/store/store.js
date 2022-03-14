import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import { comentsReducer } from '../reducers/comentsReducer';
import { loginReducer } from '../reducers/loginReducer';
import { productsReducer } from '../reducers/productsReducer';
import { registerReducer } from '../reducers/registerReducer';

const composeEnhancers = (typeof window !== 'undefined' && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: loginReducer,
    register: registerReducer,
    products:productsReducer,
    coments: comentsReducer
})


export const store = createStore(
    reducers,
    composeEnhancers( 
        applyMiddleware(thunk))
)