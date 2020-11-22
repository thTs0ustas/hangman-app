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

      let newStatus = title;
      if (!word || correctTries === 0) return newStatus;
      if (!gaps.includes("_")) newStatus = "We have a Winner !!!";
      if (wrongTries === 6) newStatus = "Aaand I'm dead !!!";

      return newStatus;
    }),
    map((new_status) => winnerOrLoser(new_status))
  );

export { epicWinningOrLosing };
