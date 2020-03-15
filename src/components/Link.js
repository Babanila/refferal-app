import React from "react";
import { differentBtwCreatedTimeAndNow } from "./Utils";

function Link(props) {
  const { link } = props;

  return (
    <div>
      <div
        style={{
          margin: "3em"
        }}
      >
        <span>{props.index + 1}.</span>
        <p>Description: {link.description}</p>
        <p>Refferal Code: {link.url}</p>
        <p>Created: {differentBtwCreatedTimeAndNow(link.createdAt)}</p>
      </div>
    </div>
  );
}

export default Link;
