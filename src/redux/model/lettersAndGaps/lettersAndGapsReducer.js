import { INITIAL_STATE } from "../../INITIAL_STATE";
import { createReducer } from "@reduxjs/toolkit";
import { restart, settingGame, wrongTry } from "../game";
import { settingLetter } from "./lettersAndGapsActions";

const init = {
  correctTries: INITIAL_STATE.tries,
  wrongTries: INITIAL_STATE.wrongTries,
  guess: INITIAL_STATE.guess,
};
// export const gapsAndLettersReducer = createReducer(init, {
//   [settingGame]: (state, action) => ({
//     ...state,
//     correctTries: action.payload.tries,
//     wrongTries: action.payload.wrongTries,
//   }),
//   [settingLetter]: (state, action) => ({
//     ...state,
//     correctTries: ++state.tries,
//     guess: [...state.guess, action.payload],
//   }),
//   [wrongTry]: (state) => ({ ...state, wrongTries: ++state.wrongTries }),
//   [restart]: () => Object.assign({}, init),
// });
export const gapsAndLettersReducer = (state = init, action) => {
  switch (action.type) {
    case "SETTING_GAME":
      return {
        ...state,
        correctTries: action.payload.tries,
        wrongTries: action.payload.wrongTries,
      };

    case "SETTING_LETTER":
      return {
        ...state,
        correctTries: ++state.tries,
        guess: [...state.guess, action.payload],
      };

    case "WRONG_TRY":
      return {
        ...state,
        wrongTries: ++state.wrongTries,
      };
    case "RESTART":
      return Object.assign({}, init);
    default:
      return state;
  }
};
