import { INITIAL_STATE } from '../../initialState/INITIAL_STATE';
import { createSlice } from '@reduxjs/toolkit';

const init = {
  word: INITIAL_STATE.word,
  gaps: Array(INITIAL_STATE.word.length).fill('_').join(' '), //INITIAL_STATE.gaps,
};

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
      state.word = init.word;
      state.gaps = init.gaps;
    },
  },
});

export const { settingWords, settingGaps, settingNewGaps, wordsRestart } = wordReducer.actions;
export default wordReducer.reducer;
