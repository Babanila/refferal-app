import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { AUTH_TOKEN } from "../constants";

function Header(props) {
  const headerStyles = {
    base: {
      width: "100%",
      minWidth: "360px",
      height: "auto",
      display: "flex",
      backgroundColor: "#000033",
      color: "#FFFFFF",
      position: "fixed",
      top: 0
    },

    minBase: {
      width: "100%",
      display: "flex",
      margin: "0 auto",
      fontSize: "18px",
      padding: "10px"
    },

    title: {
      width: "30%",
      fontSize: "24px",
      fontWeight: "bold"
    },

    navLink: {
      width: "70%",
      height: "auto",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    },

    pageLink: {
      display: "flex",
      alignItems: "center"
    },

    linkDiv: {
      fontSize: "18px",
      textTransform: "uppercase",
      fontWeight: "bold",
      marginRight: "1em"
    },

    logOutDiv: {
      fontSize: "18px",
      textTransform: "uppercase",
      color: "#FFFFFF",
      fontWeight: "bold",
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

        <div style={{ ...headerStyles.navLink }}>
          <div style={{ ...headerStyles.pageLink }}>
            <Link to="/" style={{ ...headerStyles.hLink }}>
              <div style={{ ...headerStyles.linkDiv }}>view list</div>
            </Link>

            {authToken && <div style={{ ...headerStyles.linkDiv }}>|</div>}

            {authToken && (
              <Link to="/create-referral" style={{ ...headerStyles.hLink }}>
                <div style={{ ...headerStyles.linkDiv }}>
                  Create referral link
                </div>
              </Link>
            )}

            {authToken && <div style={{ ...headerStyles.linkDiv }}>|</div>}

            {/* {authToken && (
              <Link to="/account" style={{ ...headerStyles.hLink }}>
                <div style={{ ...headerStyles.linkDiv }}>My Account</div>
              </Link>
            )} */}
          </div>

          {authToken ? (
            <Link to="/login" style={{ ...headerStyles.logOutDiv }}>
              <div
                style={{ ...headerStyles.logOutDiv }}
                onClick={() => {
                  localStorage.removeItem(AUTH_TOKEN);
                  props.history.push(`/`);
                }}
              >
                logout
              </div>
            </Link>
          ) : (
            <Link to="/login" style={{ ...headerStyles.logOutDiv }}>
              <div style={{ ...headerStyles.logOutDiv }}>login</div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default withRouter(Header);
