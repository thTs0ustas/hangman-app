import { combineReducers } from 'redux';
import { wordReducer, lettersAndGapsReducer, gameReducer } from './model';

export const rootReducer = combineReducers({
  words: wordReducer,
  tries: lettersAndGapsReducer,
  game: gameReducer,
});

export {
  correctLetter,
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
