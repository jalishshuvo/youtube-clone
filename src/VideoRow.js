import React from "react";
import "./VideoRow.css";
import VerifiedUserOutlinedIcon from "@material-ui/icons/VerifiedUserOutlined";

function VideoRow({
  thumbnail,
  title,
  views,
  timestamp,
  channelLogo,
  channelName,
  verified,
  description,
}) {
  return (
    <div className="videoRow">
      <div className="videoRow__thumbnail">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="videoRow__info">
        <h3> {title} </h3>
        <p>
          {" "}
          {views} views . {timestamp}{" "}
        </p>
        <div className="videoRow__channellogo">
          <img src={channelLogo} alt={channelName} />
          <p>
            {" "}
            {channelName} {verified && <VerifiedUserOutlinedIcon />}{" "}
          </p>
        </div>
        <p> {description} </p>
      </div>
    </div>
  );
}

export default VideoRow;
