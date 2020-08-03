import React from "react";
import "./SidebarRow.css";

function SidebarRow({ selected, title, Icon }) {
  return (
    <div className={`sidebarRow ${selected && "sidebarRow__selected"}`}>
      <Icon className="sidebarRow__icon" />
      <h2>{title}</h2>
    </div>
  );
}

export default SidebarRow;
