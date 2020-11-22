import { combineEpics } from "redux-observable";
import {
  epicTries,
  epicCorrectness,
  epicLetters,
  epicWords,
  epicRestart,
  epicWinningOrLosing,
} from "./epicsContainer";

export default combineEpics(
  epicTries,
  epicCorrectness,
  epicLetters,
  epicWords,
  epicRestart,
  epicWinningOrLosing
);
