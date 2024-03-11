import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FrameState {
    frameState: string;
}

const initialState: FrameState = {
    frameState: 'Fooldal',
};
  
const frameSlice = createSlice({
    name: 'frame',
    initialState,
    reducers: {
      updateFrameState: (state, action: PayloadAction<string>) => {
        state.frameState = action.payload;
      },
    },
});
export const {updateFrameState } = frameSlice.actions;

const store = configureStore({
    reducer: frameSlice.reducer,
});
  
export default store;