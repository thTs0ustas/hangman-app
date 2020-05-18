import React, { useEffect } from "react";
import { connect } from "react-redux";
import { letsStart } from "../redux/actions";

export const Words = ({ letsStart }) => {
  let tries = 3;
  let words = "all";
  let word = Array(words.length).fill("_ ");

  /* useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://random-word-api.herokuapp.com/word?number=10"
      );
      const responce = await data.json();
      console.log(responce);
      return responce;
    };
    fetchData();
  }); */

  return (
    <div>
      <div>
        <h4>{`Number of tries: ${tries}`}</h4>
        <h4>{word}</h4>
      </div>
      <button onClick={() => letsStart()}>Press</button>
    </div>
  );
};
const mapStateToProps = (state) => state;
export default connect(mapStateToProps, {
  letsStart,
});
