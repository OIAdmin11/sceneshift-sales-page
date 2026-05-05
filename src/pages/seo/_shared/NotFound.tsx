import { Link } from "react-router-dom";

/** Minimal not-found view used by SEO detail pages when slug doesn't resolve. */
export default function NotFound({
  title = "Page not found",
}: {
  title?: string;
}) {
  return (
    <div className="container">
      <h1>{title}</h1>
      <p>That page does not exist or has moved.</p>
      <p>
        <Link to="/services">Browse our services</Link>{" "}
        or <Link to="/iowa">see Iowa coverage</Link>.
      </p>
    </div>
  );
}
