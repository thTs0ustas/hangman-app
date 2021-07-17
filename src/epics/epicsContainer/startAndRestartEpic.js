import { ofType } from "redux-observable";
import { map, mapTo, tap } from "rxjs/operators";

import { rword } from "rword";

import { RESTART } from "../../redux/model";
import { settingWord, letsStart } from "../../redux";

const epicWords = (action$) =>
  action$.pipe(
    ofType("LETS_START"),
    map(() => rword.generate(1, { length: "4-12" })),
    tap(console.log),
    map(settingWord)
  );

const epicRestart = (action$) =>
  action$.pipe(ofType(RESTART), mapTo(letsStart()));

export { epicWords, epicRestart };
