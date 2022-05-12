import { combineReducers } from 'redux';
import { wordReducer, gapsAndLettersReducer, gameReducer } from './model';

export const rootReducer = combineReducers({
  words: wordReducer,
  tries: gapsAndLettersReducer,
  game: gameReducer,
});

export {
  winnerOrLoser,
  gameRestart,
  settingWords,
  settingGaps,
  settingNewGaps,
  wordsRestart,
  settingGame,
  settingLetter,
  wrongTries,
  letterGapsRestart,
  letsStart,
  setLetter,
  restart,
} from './model';
