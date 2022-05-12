export { winnerOrLoser, gameRestart, default as gameReducer } from './game';

export {
  default as wordReducer,
  settingWords,
  settingGaps,
  settingNewGaps,
  wordsRestart,
} from './word';

export {
  default as lettersAndGapsReducer,
  settingGame,
  settingLetter,
  wrongTries,
  letterGapsRestart,
} from './lettersAndGaps';

export { letsStart, setLetter, restart } from './actions/actions';
