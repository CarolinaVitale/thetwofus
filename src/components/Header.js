import { Link } from "react-router-dom";
export default function Header() {

  return (
    <header id="top">
      <Link to="/" aria-label="The Two of Us home">
      <img className="nav-logo" src="/assets/green-logo@4x.png" alt="The Two of Us" />
      </Link>
      <nav aria-label="Main navigation">
      <Link to="/catalog">The good stuff</Link>
      <Link to="/#packaging">The little details</Link>
      <Link to="/about">Our story</Link>
      </nav>
      <Link className="nav-contact" to="/contact">Say hello ↗</Link>
      </header>

  );
}
