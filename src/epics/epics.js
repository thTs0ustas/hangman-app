import { map, mergeMap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { settingWord } from "../redux/actions";
import { ofType, combineEpics } from "redux-observable";



  const epicWords = (action$) =>
  action$.pipe(
    ofType("LETS_START"),
    mergeMap(() =>
      ajax
        .getJSON("https://random-word-api.herokuapp.com/word?number=10")
        .pipe(
          map((response) => settingWord(response[2]))
        )
    )
  );

  const epicGaps = action$ =>
  action$.pipe(
    ofType('SETTING_WORD'),
    map(action=> Array(action.length).fill('_ '))
  )



export default combineEpics(epicWords,epicGaps) ;
