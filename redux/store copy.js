// store.js
import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './login/loginSlice'; // Renamed for clarity
import portfolioReducer from './portfolios/portfolioSlice'; // Renamed for clarity
import commonReducer from './common/commonSlice'; // Renamed for clarity

const store = configureStore({
  reducer: {
    login: loginReducer,
    portfolio: portfolioReducer,
    common: commonReducer,
  },
  // No need to explicitly add ReduxThunk or composeWithDevTools
  // They are included by default in development mode.
});

export default store;