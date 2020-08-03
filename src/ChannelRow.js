import React from "react";
import "./ChannelRow.css";
import VerifiedUserOutlinedIcon from "@material-ui/icons/VerifiedUserOutlined";

function ChannelRow({
  image,
  channelName,
  verified,
  subscribers,
  videos,
  descriptions,
}) {
  return (
    <div className="channelRow">
      <div className="channelRow__image">
        <img src={image} alt={channelName} />
      </div>
      <div className="channelRow__info">
        <h4>
          {" "}
          {channelName} {verified && <VerifiedUserOutlinedIcon />}{" "}
        </h4>
        <p>
          {subscribers} . {videos}
        </p>
        <p> {descriptions} </p>
      </div>
    </div>
  );
}

export default ChannelRow;
