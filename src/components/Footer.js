import Icon from './Icon';
import { Link } from "react-router-dom";
export default function Footer() {

  return (
    <footer>
      <div className="footer-main">
      <img src="/assets/green-logo@4x.png" alt="The Two of Us" />
      <p>Little things.<br />Colorful connections.<br />Always better together.</p>
      <div>
      <Link to="/catalog">The collection <Icon /></Link>
      <Link to="/about">Our story <Icon /></Link>
      <Link to="/contact">Contact <Icon /></Link>
      </div>
      </div>
      <div className="footer-bottom">
      <span>© <span id="year">2026</span> THE TWO OF US</span>
      <span>A FIRST LOOK · VISUAL DEMO</span>
      <Link to="/#top">BACK TO TOP <Icon name="up" /></Link>
      </div>
      </footer>

  );
}
