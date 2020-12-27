import { map } from "rxjs/operators";

import { winnerOrLoser } from "../../redux";

import { ofType } from "redux-observable";

const epicWinningOrLosing = (action$, state$) =>
  action$.pipe(
    ofType("SETTING_WINNER_LOSER"),
    map(() => {
      const {
        words: { word, gaps },
        tries: { wrongTries, correctTries },
        game: { title },
      } = state$.value;

      if (!word || correctTries === 0) return title;
      if (!gaps.includes("_")) return "😁 you found the word !!!";
      if (wrongTries === 6) return `😅 the word was "${word}"`;
      return title;
    }),
    map((new_status) => winnerOrLoser(new_status))
  );

export { epicWinningOrLosing };
