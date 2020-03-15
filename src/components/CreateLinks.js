import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { jsx, css } from "@emotion/core";

const createLinkStyles = {
  baseStyles: { width: "350px", minWidth: "300px", backgroundColor: "#f2f2f2" },

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
    fontSize: "16px"
  },

  submitStyles: {
    width: "100px",
    backgroundColor: "#4CAF50",
    color: "#FFFFFF",
    padding: "14px 20px",
    marginLeft: "100px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px"
  }
};

const POSTLINK_MUTATION = gql`
  mutation PostMutation($description: String!, $url: String!) {
    post(description: $description, url: $url) {
      id
      createdAt
      url
      description
    }
  }
`;

class CreateLink extends Component {
  state = {
    description: "",
    url: ""
  };

  render() {
    const { description, url } = this.state;
    return (
      <div style={{ ...createLinkStyles.baseStyles }}>
        <div style={{ ...createLinkStyles.formStyles }}>
          <input
            style={{ ...createLinkStyles.inputStyles }}
            value={description}
            onChange={e => this.setState({ description: e.target.value })}
            type="text"
            placeholder="A description for the link"
          />
          <input
            style={{ ...createLinkStyles.inputStyles }}
            value={url}
            onChange={e => this.setState({ url: e.target.value })}
            type="text"
            placeholder="The URL for the link"
          />
        </div>
        <Mutation
          mutation={POSTLINK_MUTATION}
          variables={{ description, url }}
          onCompleted={() => this.props.history.push("/")}
        >
          {postMutation => (
            <button
              style={{ ...createLinkStyles.submitStyles }}
              onClick={postMutation}
            >
              Submit
            </button>
          )}
        </Mutation>
      </div>
    );
  }
}

export default CreateLink;
