import { createStore, combineReducers } from 'redux'
import ownerReducer from './ownerReducer'
import customerReducer from './customerReducer';

const reducer = combineReducers({
    owner: ownerReducer,
    customer: customerReducer
})

export default createStore(reducer)