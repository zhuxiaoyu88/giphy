import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main>
      <p>Sorry, the page you're looking for is not found.</p>
      <Link to="/">Go Back Home</Link>
    </main>
  );
}
