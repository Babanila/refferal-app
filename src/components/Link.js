import React from "react";

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
        <p>Name: {link.postedBy ? link.postedBy.firstname : "null"}</p>
        <p>Description: {link.description}</p>
        <p>Url: {link.url}</p>
      </div>
    </div>
  );
}

export default Link;
