import React from "react";
import Words from "./Words";

export const Game = () => {
  let array = [1, 2, 3, 5, 34, 35, 76];
  return (
      <div>
          {array.length > 0
              ? console.log(array.filter((e) => e > 4).reduce((e, i) => +(i + e), []))
              : console.log("NoNO")}
          <Words/>
      </div>
  );
};
