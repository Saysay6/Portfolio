import "../style/Footer.css";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  return (
    <footer className="footer">
      <button className="back-to-top" onClick={scrollToTop}>
        <FaArrowUp style={{ marginRight: "8px" }} />
        Back to Top
      </button>
</footer>
  );
};

export default Footer;