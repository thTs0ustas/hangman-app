import { map } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { winnerOrLoser } from '../../redux/model';
import { actionTypes } from '../../redux/model/actions/actionTypes';

const epicWinningOrLosing = (action$, state$) =>
  action$.pipe(
    ofType(actionTypes.SETTING_WINNER_LOSER),
    map(() => {
      const {
        words: { word, gaps },
        tries: { wrongTries, correctTries },
        game: { title },
      } = state$.value;

      if (!word || correctTries === 0) return title;
      if (!gaps.includes('_')) return '😁 you found the word !!!';
      if (wrongTries === 6) return `😅 the word was "${word}"`;
      return title;
    }),
    map(winnerOrLoser)
  );

export { epicWinningOrLosing };
