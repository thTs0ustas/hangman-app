import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from '../../initialState/INITIAL_STATE';
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
      state.correctTries++;
    },
    wrongTries: (state, action) => {
      state.wrongTries++;
      state.guess.push(action.payload);
    },
    letterGapsRestart: (state) => {
      state.correctTries = init.correctTries;
      state.wrongTries = init.wrongTries;
      state.guess = init.guess;
    },
  },
});

export const { settingGame, settingLetter, wrongTries, letterGapsRestart } =
  gapsAndLettersReducer.actions;
export default gapsAndLettersReducer.reducer;
