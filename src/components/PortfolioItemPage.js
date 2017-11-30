import React from "react";

const PortfolioItemPage = props => {
  return (
    <div>
      <h1>{props.match.params.id} Portfolio Piece</h1>
      <p>
        <i>Isn't it amazing?!</i>
      </p>
    </div>
  );
};

export default PortfolioItemPage;
