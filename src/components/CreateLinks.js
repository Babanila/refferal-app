import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { FEEDLINKS_QUERY } from "./LinkLists";

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
          <h2 style={{ margin: "10px 0" }}>Create new referral link</h2>

          <input
            style={{ ...createLinkStyles.inputStyles }}
            value={description}
            onChange={e => this.setState({ description: e.target.value })}
            type="text"
            placeholder="A description for the referral link"
          />
          <input
            style={{ ...createLinkStyles.inputStyles }}
            value={url}
            onChange={e => this.setState({ url: e.target.value })}
            type="text"
            placeholder="Referral code"
          />
          <Mutation
            mutation={POSTLINK_MUTATION}
            variables={{ description, url }}
            onCompleted={() => this.props.history.push("/")}
            update={(store, { data: { post } }) => {
              const data = store.readQuery({ query: FEEDLINKS_QUERY });
              data.feed.links.unshift(post);
              store.writeQuery({
                query: FEEDLINKS_QUERY,
                data
              });
            }}
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
