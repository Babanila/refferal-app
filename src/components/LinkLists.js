import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Link from "./Link";
import { AUTH_TOKEN } from "../constants";

export const FEEDLINKS_QUERY = gql`
  {
    feed {
      links {
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
  }
`;

function LinkList() {
  const authToken = localStorage.getItem(AUTH_TOKEN);

  return (
    <Query query={FEEDLINKS_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <div>Fetching</div>;
        if (error) return <div>Error</div>;

        const linksToRender = data.feed.links;

        return (
          <div
            style={{
              width: "100%"
            }}
          >
            {authToken && (
              <div>
                <h3 style={{ marginLeft: "5%" }}>List of all users</h3>
                {linksToRender.map((link, index) => (
                  <Link key={link.id} link={link} index={index} />
                ))}
              </div>
            )}

            {!authToken && (
              <div
                style={{
                  marginLeft: "5%",
                  fontSize: "20px",
                  fontWeight: "bold"
                }}
              >
                Please login to see the list.
              </div>
            )}
          </div>
        );
      }}
    </Query>
  );
}

export default LinkList;
