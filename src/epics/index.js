import { combineEpics } from "redux-observable";
import {
  settingGapsEpic,
  correctWordEpic,
  setLettersEpic,
  newWordsEpic, restartEpic,
  refreshStatusEpic,
} from "./epicsContainer";

export default combineEpics(
  settingGapsEpic,
  correctWordEpic,
  setLettersEpic,
  newWordsEpic, restartEpic,
  refreshStatusEpic,
);
