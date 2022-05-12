import { map } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { actionTypes, winnerOrLoser } from '../../features';

const epicWinningOrLosing = (action$, state$) =>
  action$.pipe(
    ofType(actionTypes.STATUS_CHECK),
    map(() => {
      const {
        words: { word, gaps },
        tries: { wrongTries, correctTries },
        game: { title },
      } = state$.value;

      if (!word || correctTries === 0) return title;
      if (!gaps.includes('_ ')) return '😁 you found the word !!!';
      if (wrongTries === 6) return `😅 the word was "${word}"`;
      return title;
    }),
    map(winnerOrLoser)
  );

export { epicWinningOrLosing };
