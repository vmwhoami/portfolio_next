import { combineReducers } from 'redux';
import loginReducer from './login/loginReducer';
import portfolioReducer from './portfolios/portfolioReducer';

const rootReducer = combineReducers({ loginReducer, portfolioReducer });

export default rootReducer;
