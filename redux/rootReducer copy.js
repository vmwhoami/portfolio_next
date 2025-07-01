// rootReducer.js
import { combineReducers } from '@reduxjs/toolkit'; // Import from @reduxjs/toolkit
import loginReducer from './login/loginSlice';
import portfolioReducer from './portfolios/portfolioSlice';
import commonReducer from './common/commonSlice';

const rootReducer = combineReducers({
  login: loginReducer,
  portfolio: portfolioReducer,
  common: commonReducer,
});

export default rootReducer;