import { map } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { correctTry, settingGaps, settingNewGaps, wrongTry } from '../../redux';
import { actionTypes } from '../../redux/model/actions/actionTypes';

const epicTries = (action$) =>
  action$.pipe(
    ofType('SETTING_WORD'),
    map((action) => settingGaps(Array(action.payload.length).fill('_ ')))
  );

const epicLetters = (action$, state$) =>
  action$.pipe(
    ofType(actionTypes.SET_LETTER),
    map(({ payload }) => {
      const { word } = state$.value.words;
      if (!word.includes(payload)) return wrongTry();
      return correctTry(payload);
    })
  );

const epicCorrectness = (action$, state$) =>
  action$.pipe(
    ofType('CORRECT_LETTER'),
    map(() =>
      settingNewGaps(
        [...state$.value.words.word]
          .map((e) => (state$.value.tries.guess.includes(e) ? e : '_ '))
          .join('')
      )
    )
  );

export { epicTries, epicCorrectness, epicLetters };
