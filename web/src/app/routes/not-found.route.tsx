import { Link } from "react-router";

export const NotFoundRoute = () => {
  return (
    <main>
      <h1>404</h1>

      <h2>Page Not Found</h2>

      <p>Oops! The page you're looking for doesn't exist.</p>

      <button>
        <Link to="/">Back to Home</Link>
      </button>
    </main>
  );
};
