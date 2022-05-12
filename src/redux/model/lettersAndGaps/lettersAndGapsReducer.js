import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from '../../INITIAL_STATE';

const init = {
  correctTries: INITIAL_STATE.tries,
  wrongTries: INITIAL_STATE.wrongTries,
  guess: INITIAL_STATE.guess,
};

export const gapsAndLettersReducer = createSlice({
  name: 'gapsAndLetters',
  initialState: init,
  reducers: {
    settingGame: (state, action) => {
      state.correctTries = action.payload.tries;
      state.wrongTries = action.payload.wrongTries;
    },
    settingLetter: (state, action) => {
      state.guess.push(action.payload);
      state.correctTries = ++state.tries; // ??????
    },
    wrongTries: (state) => {
      state.wrongTries = ++state.wrongTries;
    },
    letterGapsRestart: (state) => {
      state.correctTries = init;
    },
  },
});

export const { settingGame, settingLetter, wrongTries, letterGapsRestart } =
  gapsAndLettersReducer.actions;
export default gapsAndLettersReducer.reducer;
