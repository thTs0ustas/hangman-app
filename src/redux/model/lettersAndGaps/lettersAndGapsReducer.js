import { INITIAL_STATE } from "../../INITIAL_STATE";

const init = {
  correctTries: INITIAL_STATE.tries,
  wrongTries: INITIAL_STATE.wrongTries,
  guess: INITIAL_STATE.guess,
};

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
