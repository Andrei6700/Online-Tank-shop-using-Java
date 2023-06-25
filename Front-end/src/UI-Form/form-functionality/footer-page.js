import React from "react";
import { Link } from "react-router-dom";

export const FooterPage = () => {
  return (
    <div className="footer-page">
      <Link className="footer-link" to={`mailto: andreibalanoiu67@gmail.com`}>
        @andreibalanoiu67@gmail.com
      </Link>
    </div>
  );
};
