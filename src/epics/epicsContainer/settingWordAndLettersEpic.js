import { map } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import {
  actionTypes,
  settingGaps,
  settingLetter,
  settingNewGaps,
  wrongTries,
} from '../../features';

const settingGapsEpic = (action$) =>
  action$.pipe(
    ofType('word/settingWords'),
    map((action) => settingGaps(Array(action.payload.length).fill('_ ')))
  );

const setLettersEpic = (action$, state$) =>
  action$.pipe(
    ofType(actionTypes.SET_LETTER),
    map(({ payload }) => {
      const { word } = state$.value.words;
      console.log(word);
      if (!word.includes(payload)) return wrongTries(payload);
      return settingLetter(payload);
    })
  );

const correctWordEpic = (action$, state$) =>
  action$.pipe(
    ofType('gapsAndLetters/settingLetter'),
    map(() =>
      settingNewGaps(
        [...state$.value.words.word]
          .map((e) => (state$.value.tries.guess.includes(e) ? `${e} ` : '_ '))
          .join('')
      )
    )
  );

export { settingGapsEpic, correctWordEpic, setLettersEpic };
