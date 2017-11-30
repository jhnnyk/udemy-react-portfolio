import React from "react";
import { Link } from "react-router-dom";

const PortfolioPage = () => (
  <div>
    <h1>My Portfolio</h1>
    <ul>
      <li>
        <Link to="/portfolio/123">My 123 Portfolio Piece</Link>
      </li>
      <li>
        <Link to="/portfolio/246">My 246 Portfolio Piece</Link>
      </li>
    </ul>
  </div>
);

export default PortfolioPage;
