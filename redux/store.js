// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { createWrapper } from 'next-redux-wrapper';

// Create a makeStore function that returns a new store instance
const makeStore = () => configureStore({
  reducer: rootReducer,
});

// Create and export the wrapper
export const wrapper = createWrapper(makeStore);