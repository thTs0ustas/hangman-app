import { ofType } from 'redux-observable';
import { map, mergeMap } from 'rxjs/operators';

import randomWords from 'random-words';

import {
  settingWords,
  winnerOrLoser,
  gameRestart,
  wordsRestart,
  letterGapsRestart,
  actionTypes,
} from '../../features';

const restartEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.RESTART),
    mergeMap(() => [gameRestart(), wordsRestart(), letterGapsRestart()])
  );

const newWordsEpic = (action$) =>
  action$.pipe(
    ofType(actionTypes.LETS_START),
    map(() => randomWords({ exactly: 1, join: ' ' })),
    mergeMap((word) => [settingWords(word), winnerOrLoser('Lets Play')])
  );

export { newWordsEpic, restartEpic };
