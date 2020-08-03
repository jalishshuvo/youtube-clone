import React from "react";
import TuneSharpIcon from "@material-ui/icons/TuneSharp";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="search">
      <div className="search__filter">
        <TuneSharpIcon />
        <h2> FILTER </h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s176-c-k-c0x00ffffff-no-rj-mo"
        channelName="Clever Programmer"
        verified
        subscribers=" 668 k subscribers"
        videos="384 videos"
        descriptions="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the ..."
      />
      <hr />
      <VideoRow
        thumbnail="https://assets.weforum.org/article/image/large_e1DkRSUGxDLhwC8r4uGvoz5pQ3jmFT_ZNjGOL-dZvVM.jpg"
        title="🔴 Build AI Car & Pedestrian Tracking with Python for Beginners (Tutorial)"
        views="17k views"
        timestamp="Streamed 1 day ago"
        channelLogo="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s176-c-k-c0x00ffffff-no-rj-mo"
        channelName="Clever Programmer"
        verified
        description="Do you want to become Python Developer & make an income? I just dropped a FREE Python Masterclass training ..."
      />
      <hr />
    </div>
  );
}

export default SearchPage;
