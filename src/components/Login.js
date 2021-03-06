import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { AUTH_TOKEN } from "../constants";

const loginStyles = {
  baseStyles: { width: "360px", minWidth: "300px", margin: "0 auto" },

  formStyles: {
    width: "300px",
    minWidth: "300px",
    borderRadius: "5px",
    padding: "10px",
    fontSize: "16px",
    margin: "0 auto"
  },

  inputStyles: {
    width: "100%",
    padding: "12px 10px",
    margin: "8px 0",
    boxSizing: "border-box",
    fontSize: "16px",
    outline: "none"
  },

  buttonStyles: {
    width: "100px",
    backgroundColor: "#4CAF50",
    color: "#FFFFFF",
    padding: "8px 20px",
    marginLeft: "35%",
    marginBottom: "20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    outline: "none",
    textTransform: "uppercase",
    hover: {
      backgroundColor: "#2412EA"
    }
  },

  button2Styles: {
    width: "250px",
    color: "#FFFFFF",
    padding: "5px 10px",
    marginLeft: "8%",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    outline: "none",
    hover: {
      backgroundColor: "#EFEFEF"
    }
  }
};

const SIGNUP_MUTATION = gql`
  mutation SignupMutation(
    $email: String!
    $password: String!
    $firstname: String!
    $lastname: String!
    $refferalLink: String
  ) {
    signup(
      email: $email
      password: $password
      firstname: $firstname
      lastname: $lastname
      refferalLink: $refferalLink
    ) {
      token
    }
  }
`;

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

class Login extends Component {
  state = {
    login: true,
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    refferalLink: ""
  };

  render() {
    const {
      login,
      email,
      password,
      firstname,
      lastname,
      refferalLink
    } = this.state;
    return (
      <div style={{ ...loginStyles.baseStyles }}>
        <div style={{ ...loginStyles.formStyles }}>
          <h2 style={{ marginLeft: "35%" }}>{login ? "Login" : "Sign Up"}</h2>

          {!login && (
            <input
              style={{ ...loginStyles.inputStyles }}
              value={firstname}
              onChange={e => this.setState({ firstname: e.target.value })}
              type="text"
              placeholder="Firstname"
            />
          )}

          {!login && (
            <input
              style={{ ...loginStyles.inputStyles }}
              value={lastname}
              onChange={e => this.setState({ lastname: e.target.value })}
              type="text"
              placeholder="Lastname"
            />
          )}

          <input
            style={{ ...loginStyles.inputStyles }}
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
            type="text"
            placeholder="Your email address"
          />

          <input
            style={{ ...loginStyles.inputStyles }}
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
            type="password"
            placeholder="Choose a safe password"
          />

          {!login && (
            <input
              style={{ ...loginStyles.inputStyles }}
              value={refferalLink}
              onChange={e => this.setState({ refferalLink: e.target.value })}
              type="text"
              placeholder="refferal link"
            />
          )}

          <div>
            <Mutation
              mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
              variables={{ email, password, firstname, lastname, refferalLink }}
              onCompleted={data => this._confirm(data)}
            >
              {mutation => (
                <div onClick={mutation}>
                  {login ? (
                    <button style={{ ...loginStyles.buttonStyles }}>
                      login
                    </button>
                  ) : (
                    <button style={{ ...loginStyles.buttonStyles }}>
                      Signup
                    </button>
                  )}
                </div>
              )}
            </Mutation>

            <div onClick={() => this.setState({ login: !login })}>
              {login ? (
                <button style={{ ...loginStyles.button2Styles }}>
                  <span style={{ color: "#000000" }}>
                    need to create an account?
                  </span>
                </button>
              ) : (
                <button style={{ ...loginStyles.button2Styles }}>
                  <span style={{ color: "#000000" }}>
                    already have an account?
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  _confirm = async data => {
    const { token } = this.state.login ? data.login : data.signup;
    this._saveUserData(token);
    this.props.history.push(`/`);
  };

  _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token);
  };
}

export default Login;
