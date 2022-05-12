import { ofType } from "redux-observable";
import { map, mapTo, tap } from "rxjs/operators";

import randomWords from "random-words";

import { RESTART } from "../../redux/model";
import { settingWord, letsStart } from "../../redux";

const epicWords = (action$) =>
  action$.pipe(
    ofType("LETS_START"),
    map(() => randomWords({ exactly: 1 })),
    map((word) => word[0]),
    tap(console.log),
    map(settingWord)
  );

const epicRestart = (action$) =>
  action$.pipe(ofType(RESTART), mapTo(letsStart()));

export { epicWords, epicRestart };
