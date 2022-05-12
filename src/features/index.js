import { combineReducers } from 'redux';
import { wordReducer, lettersAndGapsReducer, gameReducer } from './reducers';

export const rootReducer = combineReducers({
  words: wordReducer,
  tries: lettersAndGapsReducer,
  game: gameReducer,
});

export { letsStart, setLetter, restart, correctLetter, statusCheck } from './actions/actions';
export { actionTypes } from './actions/actionTypes';
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
} from './reducers';
