import { map, mergeMap, filter, mapTo } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import {
  settingWord,
  settingGaps,
  wrongTry,
  correctTry,
} from "../redux/actions";
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
    ofType("SETTING_WORD"),
    map((action) => {
      const gapsArray = Array(action.payload.length).fill("_ ");
      return settingGaps(gapsArray);
    })
  );

const epicLetters = (action$, state$) =>
  action$.pipe(
    ofType("SETTING_LETTER"),
    map((action) => {
      if (!state$.value.word.includes(action.payload)) {
        return wrongTry();
      } else {
        return correctTry(action.payload);
      }
    })
  );

export default combineEpics(epicWords, epicTries, epicLetters);
