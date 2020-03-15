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
        <p>Id: {link.postedBy ? link.postedBy.id : "null"}</p>
        <p>Description: {link.description}</p>
        <p>Url: {link.url}</p>
        <p>
          CreatedBy:
          {link.postedBy
            ? `${link.postedBy.firstname} ${link.postedBy.lastname}`
            : "Unknown"}
        </p>
        <p>Created: {differentBtwCreatedTimeAndNow(link.createdAt)}</p>
      </div>
    </div>
  );
}

export default Link;
