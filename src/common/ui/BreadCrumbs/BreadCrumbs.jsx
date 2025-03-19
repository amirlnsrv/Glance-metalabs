import { Link } from "react-router-dom";

import styles from "./BreadCrumbs.module.scss";

export const BreadCrumbs = ({ crumbs }) => {
  if (!crumbs || crumbs.length === 0) return null;

  return (
    <nav className={styles.breadCrumbs}>
      {crumbs.map((crumb, index) => (
        <span key={index} className={styles.breadCrumbsItem}>
          {index < crumbs.length - 1 ? (
            <Link to={crumb.path} className={styles.breadCrumbsLink}>
              {crumb.name}
            </Link>
          ) : (
            <span className={styles.breadCrumbsCurrent}>{crumb.name}</span>
          )}
          {index < crumbs.length - 1 && (
            <span className={styles.separator}>/</span>
          )}
        </span>
      ))}
    </nav>
  );
};
