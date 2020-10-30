import React from "react";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import "./MediaCard.css";

function MediaCard({
  ID,
  gradient,
  link,
  logo,
  overlay_logo,
  username,
  type,
  number,
  upButton,
  dailyCount,
}) {
  return (
    <div className="mediaCard" id={ID}>
      <div
        className="mediaCard__border fadeIn-top"
        style={{
          background: gradient,
        }}
      >
        <div className="fadeInTop-container">
          <img
            style={{
              height: "70px",
              marginBottom: "7.5%",
            }}
            src={overlay_logo}
            alt=""
          />

          <a href={link} target="blank">
            <button>
              <h4
                style={{
                  fontSize: "16px",
                  letterSpacing: "4px",
                  color: "#ffffff",
                }}
              >
                Visit
              </h4>
            </button>
          </a>
        </div>
      </div>

      <div className="mediaCard__content">
        <div className="mediaCard__top">
          <img
            style={{
              height: "24px",
              marginRight: "8px",
            }}
            src={logo}
            alt="channel-logo"
          />
          <p id="dark_mode_p">@{username}</p>
        </div>

        <div className="mediaCard__middle">
          <h1>{number}</h1>
          <h4>{type}</h4>
        </div>

        <div
          className="mediaCard__bottom"
          style={upButton ? { color: "rgb(31, 202, 31)" } : { color: "red" }}
        >
          {upButton ? (
            <ArrowDropUpIcon
              id="mediaCardBottom__button"
              fontSize="small"
              style={{ color: "rgb(31, 202, 31)" }}
            />
          ) : (
            <ArrowDropDownIcon
              id="mediaCardBottom__button"
              fontSize="small"
              style={{ color: "red" }}
            />
          )}
          <p>{dailyCount} Today </p>
        </div>
      </div>
    </div>
  );
}

export default MediaCard;
