import { combineReducers } from 'redux';
import registration from './registration/registrationReducer'
const rootReducer = combineReducers({ registration });

export default rootReducer;