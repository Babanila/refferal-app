import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Link from "./Link";

const FEEDLINKS_QUERY = gql`
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

function LinkList(props) {
  console.log("AAAAAAAA", props.history);

  return (
    <Query query={FEEDLINKS_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <div>Fetching</div>;
        if (error) return <div>Error</div>;

        const linksToRender = data.feed.links;

        return (
          <div>
            <h3 style={{ marginLeft: "5%" }}>List of all users</h3>
            {linksToRender.map(link => (
              <Link key={link.id} link={link} />
            ))}
          </div>
        );
      }}
    </Query>
  );
}

export default LinkList;
