import { INITIAL_STATE } from '../../INITIAL_STATE';
import { createSlice } from '@reduxjs/toolkit';

const init = {
  word: INITIAL_STATE.word,
  gaps: Array(INITIAL_STATE.word.length).fill('_').join(' '), //INITIAL_STATE.gaps,
};
// INITIAL_STATE.gaps = Array(INITIAL_STATE.word.length).fill("_").join(" ");

export const wordReducer = createSlice({
  name: 'word',
  initialState: init,
  reducers: {
    settingWords: (state, action) => {
      state.word = action.payload;
    },
    settingGaps: (state, action) => {
      state.gaps = action.payload;
    },
    settingNewGaps: (state, action) => {
      state.gaps = action.payload;
    },
    wordsRestart: (state) => {
      state.word = init;
    },
  },
});

export const { settingWords, settingGaps, settingNewGaps, wordsRestart } = wordReducer.actions;
export default wordReducer.reducer;
