import { applyMiddleware, combineReducers, createStore } from "redux";
import CartReducer from '../store/reducer/CartReducer'
import ProductReducer from '../store/reducer/ProductReducer'
import HistoryReducer from '../store/reducer/HistoryReducer'
import UserReducer from '../store/reducer/UserReducer'
import thunk from 'redux-thunk'

const reducers = combineReducers({CartReducer,HistoryReducer,ProductReducer,UserReducer})
const store = createStore(reducers,applyMiddleware(thunk))

export default store;