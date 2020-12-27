// import React from "react";
// import { useWordsModel } from "./useWordsModel";
// import { Buttons } from "../button/Button";
// import "./words.css";

// const withWordsProps = (Component) => (props) => {
//   const {
//     words: { words, game, tries },
//     setStart,
//     setRestart,
//     winnerLoser,
//     setLetter,
//   } = useWordsModel();

//   const disable = (letter) =>
//     !words.word || tries.guess.includes(letter) || game.title !== "Lets Play";

//   const letterMap = (mapping) =>
//     mapping.map((letter, index) => (
//       <React.Fragment key={index}>
//         <Buttons
//           disabled={disable(letter)}
//           value={letter}
//           onClick={() => {
//             setLetter(letter);
//             winnerLoser();
//           }}
//         />
//       </React.Fragment>
//     ));

//   const returnedProps = {
//     wrongTries: tries.wrongTries,
//     guess: tries.guess,
//     gaps: words.gaps,
//     word: words.word,
//     status: game.title,
//     setStart: setStart,
//     setRestart: setRestart,
//     winnerLoser: winnerLoser,
//     letterMap: letterMap,
//   };
//   return <Component {...returnedProps} {...props} />;
// };

// export default withWordsProps;
