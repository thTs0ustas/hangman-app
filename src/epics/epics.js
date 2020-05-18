import { map, mergeMap } from "rxjs/Operator";
import { ajax } from "rxjs/ajax";
import { settingWord } from "../redux/actions";
import { /* combineEpics, */ ofType } from "redux-observable";

const epicWords = (action$) =>
  action$.pipe(
    ofType("LETS_START"),
    mergeMap(() =>
      ajax
        .getJSON("https://random-word-api.herokuapp.com/word?number=10")
        .pipe(map((response) => settingWord(response[2])))
    )
  );

export default epicWords /* combineEpics(epicWords) */;
