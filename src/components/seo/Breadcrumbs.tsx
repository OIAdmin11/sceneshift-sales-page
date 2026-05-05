/**
 * Visible breadcrumbs that match the BreadcrumbList JSON-LD emitted by the
 * page metadata builder. Always pair these together for the schema/visible
 * alignment that Google specifically rewards.
 */
import { Link } from "react-router-dom";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: readonly BreadcrumbItem[] }) {
  if (items.length === 0) return null;
  return (
    <nav className="seo-breadcrumbs" aria-label="Breadcrumb">
      <ol className="seo-breadcrumbs__list">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={`${item.label}-${idx}`} className="seo-breadcrumbs__item">
              {item.href && !isLast ? (
                <Link to={item.href}>{item.label}</Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined}>
                  {item.label}
                </span>
              )}
              {!isLast && <span className="seo-breadcrumbs__sep">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
