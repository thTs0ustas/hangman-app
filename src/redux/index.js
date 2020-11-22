import { combineReducers } from "redux";
import { wordReducer, gapsAndLettersReducer, gameReducer } from "./model";

export const rootReducer = combineReducers({
  words: wordReducer,
  tries: gapsAndLettersReducer,
  game: gameReducer,
});

export {
  letsStart,
  settingGame,
  wrongTry,
  correctTry,
  settingWinnerOrLoser,
  winnerOrLoser,
  restart,
  settingWord,
  settingGaps,
  settingNewGaps,
  settingLetter,
} from "./model";
