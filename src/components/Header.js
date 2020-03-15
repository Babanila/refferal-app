import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { AUTH_TOKEN } from "../constants";

function Header(props) {
  const headerStyles = {
    base: {
      width: "100%",
      height: "50px",
      display: "flex",
      backgroundColor: "#000066",
      color: "#FFFFFF",
      marginBottom: "2em"
    },

    minBase: {
      width: "100%",
      display: "flex",
      margin: "0 auto",
      fontSize: "18px",
      padding: "12px 10px"
    },

    title: {
      width: "30%",
      fontSize: "24px",
      fontWeight: "bold"
    },

    linkDiv: {
      fontSize: "18px",
      textTransform: "uppercase",
      marginLeft: "1em"
    },

    logOutDiv: {
      fontSize: "18px",
      textTransform: "uppercase",
      marginLeft: "40%",
      color: "#FFFFFF",
      textDecoration: "none"
    },

    hLink: {
      textDecoration: "none",
      color: "#FFFFFF",
      fontSize: "18px"
    }
  };

  const authToken = localStorage.getItem(AUTH_TOKEN);

  return (
    <div style={{ ...headerStyles.base }}>
      <div style={{ ...headerStyles.minBase }}>
        <div style={{ ...headerStyles.title }}>Referral App</div>

        <Link to="/" style={{ ...headerStyles.hLink }}>
          <div style={{ ...headerStyles.linkDiv }}>new</div>
        </Link>

        {authToken && <div style={{ ...headerStyles.linkDiv }}>|</div>}

        {authToken && (
          <Link to="/create" style={{ ...headerStyles.hLink }}>
            <div style={{ ...headerStyles.linkDiv }}>Create referral link</div>
          </Link>
        )}

        {authToken ? (
          <div
            style={{ ...headerStyles.logOutDiv }}
            onClick={() => {
              localStorage.removeItem(AUTH_TOKEN);
              props.history.push(`/`);
            }}
          >
            logout
          </div>
        ) : (
          <Link to="/login" style={{ ...headerStyles.logOutDiv }}>
            <div style={{ ...headerStyles.logOutDiv }}>login</div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default withRouter(Header);
