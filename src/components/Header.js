import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

function Header() {
  const headerStyles = {
    base: {
      width: "100%",
      height: "50px",
      display: "flex",
      backgroundColor: "#000066",
      color: "#FFFFFF",
      marginBottom: "2em",
      fontSize: "18px"
    },

    minBase: {
      width: "100%",
      display: "flex"
    },

    title: {
      width: "30%",
      fontSize: "30px",
      fontWeight: "bold"
    },

    hLink: {
      textDecoration: "none",
      color: "#FFFFFF",
      fontSize: "18px"
    }
  };

  return (
    <div style={{ ...headerStyles.base }}>
      <div style={{ ...headerStyles.minBase }}>
        <div style={{ ...headerStyles.title }}>Referral App</div>
        <Link to="/" style={{ ...headerStyles.hLink }}>
          new
        </Link>
        <div>|</div>
        <Link to="/create" style={{ ...headerStyles.hLink }}>
          submit
        </Link>
      </div>
    </div>
  );
}

export default withRouter(Header);
