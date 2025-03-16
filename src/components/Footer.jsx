import SocialIcons from "./SocialIcons";
import { NavLink } from "react-router-dom";

/**
 * Represents the footer section of the website.
 *
 * @component
 */

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer>
      {/* Social icons */}
      <SocialIcons />

      {/* Copyrights */}
      <NavLink to="/contact" className="footer-link">
        <p>
          <span>▷</span> Built by Omar Balbaa &copy; {currentYear}
        </p>
      </NavLink>
    </footer>
  );
};

export default Footer;
