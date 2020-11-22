import { SETTING_WORD } from "./actionTypes";
import { INITIAL_STATE } from "../../INITIAL_STATE";

const init = {
  word: INITIAL_STATE.word,
  gaps: INITIAL_STATE.gaps,
};
INITIAL_STATE.gaps = Array(INITIAL_STATE.word.length).fill("_").join(" ");

export const wordReducer = (state = init, action) => {
  switch (action.type) {
    case SETTING_WORD:
      return {
        ...state,
        word: action.payload,
      };
    case "SETTING_NEW_GAPS":
      return {
        ...state,
        gaps: action.payload,
      };
    case "SETTING_GAPS":
      return {
        ...state,
        gaps: Array(action.payload.length).fill("_").join(" "),
      };
    case "RESTART":
      return Object.assign({}, init);
    default:
      return state;
  }
};
