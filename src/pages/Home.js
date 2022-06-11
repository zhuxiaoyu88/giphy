import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Your Giphy</h1>
      <Link to="/list">Iron Man Giphy</Link>
      <br />
      <Link to="/search">Search Your Giphy</Link>
    </div>
  );
}
