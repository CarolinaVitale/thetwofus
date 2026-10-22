import Icon from './Icon';
import { Link } from "react-router-dom";
export default function Hero() {

  return (
    <section className="hero">
      <div className="hero-copy">
      <p className="eyebrow">THOUGHTFUL THINGS. COLORFUL MOMENTS.</p>
      <h1>A little<br />more <em>joy.</em>
      </h1>
      <p>For the gifts you can’t wait to give.<br />And the little things you keep for yourself.</p>
      <Link className="button dark" to="/catalog">Explore the collection <span><Icon /></span>
      </Link>
      <div className="hero-note">CREATED BY TWO FRIENDS, FOR YOUR KIND OF PEOPLE.</div>
      </div>
      <div className="hero-art">
      <img className="hero-brand" src="/assets/packaging.jpeg" alt="The Two of Us colorful brand packaging" />
      <div className="round-sticker">Made to<br />make you<br />smile.</div>
      </div>
      </section>

  );
}
