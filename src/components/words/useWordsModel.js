import { useSelector, useDispatch } from "react-redux";
import { wordsSelector } from "./selector";
import {
  letsStart,
  settingLetter,
  settingWinnerOrLosser,
  restart,
} from "../../redux/actions";

export const useWordsModel = () => {
  const dispatch = useDispatch();

  return {
    words: useSelector(wordsSelector),
    setStart: () => dispatch(letsStart()),
    setRestart: () => dispatch(restart()),
    winnerLosser: () => dispatch(settingWinnerOrLosser()),
    setLetter: (letter) => dispatch(settingLetter(letter)),
  };
};
