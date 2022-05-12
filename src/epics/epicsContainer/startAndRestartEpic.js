import { ofType } from 'redux-observable';
import { map, mergeMap } from 'rxjs/operators';

import randomWords from 'random-words';

import { settingWords, letsStart, winnerOrLoser } from '../../redux';
import { actionTypes } from '../../redux/model/actions/actionTypes';

const epicRestart = (action$) => action$.pipe(ofType(actionTypes.RESTART), map(letsStart));

const epicWords = (action$) =>
  action$.pipe(
    ofType(actionTypes.LETS_START),
    map(() => randomWords({ exactly: 1, join: ' ' })),
    mergeMap((word) => [settingWords(word), winnerOrLoser('Lets Play')])
  );

export { epicWords, epicRestart };
