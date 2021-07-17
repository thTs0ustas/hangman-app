import { INITIAL_STATE } from "../../INITIAL_STATE";
import { createReducer } from "@reduxjs/toolkit";
import { settingWord } from "./wordActions";
import { settingGaps, settingNewGaps } from "../lettersAndGaps";
import { restart } from "../game";

const init = {
  word: INITIAL_STATE.word,
  gaps: INITIAL_STATE.gaps,
};
INITIAL_STATE.gaps = Array(INITIAL_STATE.word.length).fill("_").join(" ");

export const wordReducer = createReducer(init, {
  [settingWord]: (state, action) => ({
    ...state,
    word: action.payload,
  }),
  [settingNewGaps]: (state, action) => ({
    ...state,
    gaps: action.payload,
  }),
  [settingGaps]: (state, action) => ({
    ...state,
    gaps: Array(action.payload.length).fill("_").join(" "),
  }),
  [restart]: () => Object.assign({}, init),
});
