import { INITIAL_STATE } from '../../INITIAL_STATE';
import { createSlice } from '@reduxjs/toolkit';

export const gameReducer = createSlice({
  name: 'game',
  initialState: { title: INITIAL_STATE.title },
  reducers: {
    winnerOrLoser: (state, action) => {
      state.title = action.payload;
    },
    gameRestart: (state) => {
      state.title = INITIAL_STATE.title;
    },
  },
});

export const { winnerOrLoser, gameRestart } = gameReducer.actions;
export default gameReducer.reducer;
