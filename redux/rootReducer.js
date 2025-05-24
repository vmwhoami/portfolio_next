// rootReducer.js
import { combineReducers } from 'redux';
import loginReducer from './login/loginReducer';
import portfolioReducer from './portfolios/portfolioReducer';
import commonReducer from './common/commonReducer';

const rootReducer = combineReducers({ loginReducer, portfolioReducer, commonReducer });

export default rootReducer;
