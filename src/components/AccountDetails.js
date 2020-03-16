import React from "react";
import { Query } from "react-apollo";
import { FEEDLINKS_QUERY } from "./LinkLists";
import Link from "./Link";
import { AUTH_TOKEN } from "../constants";

function AccountDetail() {
  const authToken = localStorage.getItem(AUTH_TOKEN);

  return (
    <Query query={FEEDLINKS_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <div>Fetching</div>;
        if (error) return <div>Error</div>;

        const linksToRender = data.feed.links;
        const results = linksToRender.filter(
          (link, index) => link.postedBy.id === "ck7rrtltp56a70986d5lmu6ex"
        );

        return (
          <div
            style={{
              width: "100%"
            }}
          >
            {authToken && (
              <div>
                <h3 style={{ marginLeft: "5%" }}>User details</h3>

                {results.map((link, index) => (
                  <Link key={link.id} link={link} index={index} />
                ))}
              </div>
            )}
          </div>
        );
      }}
    </Query>
  );
}

export default AccountDetail;
