import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <Link className="footer-link" to={`mailto: andreibalanoiu67@gmail.com`}>
        @andreibalanoiu67@gmail.com
      </Link>
    </div>
  );
};
