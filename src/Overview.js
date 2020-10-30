import React from "react";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import "./Overview.css";

function Overview({
  type,
  logo,
  imgRadius,
  imgOpacity,
  number,
  upButton,
  dailyCount,
}) {
  return (
    <div className="overview">
      <div className="overview__top">
        <p id="dark_mode_p">{type}</p>
        <img
          style={{
            height: "24px",
            borderRadius: imgRadius,
            opacity: imgOpacity,
          }}
          src={logo}
          alt="channel-logo"
        />
      </div>
      <div className="overview__bottom">
        <div className="overviewBottom__left">
          <h2>{number}</h2>
        </div>
        <div
          className="overviewBottom__right"
          style={upButton ? { color: "rgb(31, 202, 31)" } : { color: "red" }}
        >
          {upButton ? (
            <ArrowDropUpIcon
              id="overviewBottom__button"
              fontSize="small"
              style={{ color: "rgb(31, 202, 31)" }}
            />
          ) : (
            <ArrowDropDownIcon
              id="overviewBottom__button"
              fontSize="small"
              style={{ color: "red" }}
            />
          )}
          <p>{dailyCount}</p>
        </div>
      </div>
    </div>
  );
}

export default Overview;
