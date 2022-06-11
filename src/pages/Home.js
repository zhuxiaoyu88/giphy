import { Link } from "react-router-dom";
import GiphyLogo from "../components/GiphyLogo";

export default function Home() {
  return (
    <main className="container">
      <div className="main-heading main-heading--home">
        <h1 className="main-heading__title text-uppercase text-center">
          Welcome to Your Giphy
        </h1>
        <a
          href="https://giphy.com/"
          className="main-heading--home__logo"
          target="_blank"
          rel="nofollow"
        >
          <GiphyLogo />
        </a>
        <ul className="nav-home text-uppercase text-center">
          <li className="nav-home__item nav-item">
            <Link to="/list">Iron Man Giphy</Link>
          </li>
          <li className="nav-home__item nav-item">
            <Link to="/search">Search Your Giphy</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
