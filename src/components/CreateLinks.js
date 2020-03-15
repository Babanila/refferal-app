import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const createLinkStyles = {
  baseStyles: {
    width: "100%",
    minWidth: "360px",
    margin: "0 auto"
  },

  formStyles: {
    width: "300px",
    minWidth: "300px",
    borderRadius: "5px",
    padding: "20px",
    fontSize: "16px",
    margin: "0 auto"
  },

  inputStyles: {
    width: "100%",
    fontSize: "16px",
    padding: "10px 25px",
    margin: "10px 0",
    boxSizing: "border-box",
    outline: "none"
  },

  submitStyles: {
    backgroundColor: "#4CAF50",
    color: "#FFFFFF",
    padding: "14px 20px",
    marginLeft: "35%",
    marginTop: "0.5em",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px"
  }
};

const POSTLINK_MUTATION = gql`
  mutation PostMutation(
    $description: String!
    $url: String!
    $postedBy: [Object]
  ) {
    post(description: $description, url: $url, postedBy: $postedBy) {
      id
      createdAt
      url
      description
      postedBy {
        id
        email
        firstname
        lastname
      }
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
          <h2 style={{ margin: "10px 0" }}>Create new referral link</h2>

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
      </div>
    );
  }
}

export default CreateLink;
