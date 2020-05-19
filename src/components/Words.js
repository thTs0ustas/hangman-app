import React from "react";
import { connect } from "react-redux";
import { letsStart } from "../redux/actions";
const Words = ({ tries, gaps, letsStart}) => {
     
  return (
    <div>
      <div>
        <h4>{`Number of tries: ${tries}`}</h4>
        <h4>{gaps}</h4>
      </div>
      <button onClick={letsStart}>Press</button>
    </div>
  );
};
const mapStateToProps = (state) => state;


export default connect(mapStateToProps, {
  letsStart
})(Words);
