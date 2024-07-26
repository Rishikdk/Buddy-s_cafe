import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>

      <Link to="/">App link</Link>
      <a href="/">App from A</a>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>

      {/* it is not going to refresh page */}
    </div>
  );
}
