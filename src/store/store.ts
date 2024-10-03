import { configureStore } from '@reduxjs/toolkit';

import apiSlice from './apiSlice'
import viewButtonReducer from './viewButton/viewButton.slice'

const store = configureStore({
  reducer: {
    viewButton: viewButtonReducer, 
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;