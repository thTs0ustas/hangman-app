import { map, mergeMap, filter, mapTo } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { settingWord, pressingWrongButton } from "../redux/actions";
import { ofType, combineEpics } from "redux-observable";
import { iif } from "rxjs";

const epicWords = (action$) =>
  action$.pipe(
    ofType("LETS_START"),
    mergeMap(() =>
      ajax
        .getJSON("https://random-word-api.herokuapp.com/word?number=10")
        .pipe(
          map((response) =>
            settingWord(response[Math.floor(Math.random() * 10)])
          )
        )
    )
  );

const epicTries = (action$, state$) =>
  action$.pipe(
    ofType("PRESSING_BUTTON"),
    mergeMap(
      (actions) => filter(() => state$.includes(actions.payload)),
      mapTo(pressingWrongButton())
    )
  );

export default combineEpics(epicWords, epicTries);

/* const epicGaps = (action$) =>
  action$.pipe(
    ofType("SETTING_WORD"),
    mergeMap(({ payload }) => {
      const array$ = Array(payload.length).fill("_ ").join("");
      return mapTo(settingGaps(array$));
    })
  ); */
