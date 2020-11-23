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
      if (!gaps.includes("_")) return "We have a Winner !!!";
      if (wrongTries === 6) return "Aaand you're dead !!!";
      return title;
    }),
    map((new_status) => winnerOrLoser(new_status))
  );

export { epicWinningOrLosing };
