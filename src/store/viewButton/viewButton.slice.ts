import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ViewButton } from '../../shared/interfaces/interfaces';

const initialState: ViewButton = {
  isHorizontal: false,
};

const viewButtonSlice = createSlice({
  name: 'viewButton',
  initialState,
  reducers: {
    toggleViewButton: (state) => {
      state.isHorizontal = !state.isHorizontal;
    },
    setViewButton: (state, action: PayloadAction<boolean>) => {
      state.isHorizontal = action.payload;
    },
  },
});

// Export actions
export const { toggleViewButton, setViewButton } = viewButtonSlice.actions;

// Export reducer
export default viewButtonSlice.reducer;
