import { combineReducers } from 'redux';
import registration from './registration/registrationReducer';
import portfolioReducer from './portfolios/portfolioReducer';

const rootReducer = combineReducers({ registration, portfolioReducer });

export default rootReducer;
