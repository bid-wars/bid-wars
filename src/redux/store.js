import { createStore, combineReducers } from 'redux'
import logger from 'redux-logger'
import reducer from './ownerReducer'
import customerReducer from './customerReducer';

// const rootReducer = combineReducers({
//     owner: ownerReducer,
//     customer: customerReducer
// })
 
export default createStore(reducer)
 