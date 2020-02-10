import React from "react";

import AuthorCard from "./AuthorCard";

import authors from "./data";

// Components

const AuthorsList = () => {
  const authorsRow = authors.map(author => <AuthorCard author={author} />);
  return (
    <div className="content col-10">
      <div className="authors">
        <h3>Authors</h3>
        <div id="app" className="container-fluid">
          <div className="row">{authorsRow}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthorsList;
