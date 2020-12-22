import React from "react";
import moment from "moment";
import "./Location.scss";

const Location = () => {
  return (
    <div className="location">
      <h3 className="city">Dallas, TX</h3>
      <p>{moment().format("dddd, MMM Do YYYY")}</p>
    </div>
  );
};

export default Location;
