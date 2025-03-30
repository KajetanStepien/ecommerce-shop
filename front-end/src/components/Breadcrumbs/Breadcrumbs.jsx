import { NavLink, useParams } from "react-router-dom";
import ARROW_ICON from "../../assets/arrow-horizontal.svg";
import styles from "../Breadcrumbs/Breadcrumbs.module.css";

export function Breadcrumbs() {
  const breadcrumbs = [
    { categoryName: "Kobieta", path: "kobieta" },
    { categoryName: "Odzież", path: "odziez" },
    { categoryName: "Swetry", path: "swetry" },
  ];
  const params = useParams();
  console.log(params);
  return (
    <div className={styles.contentWrapper}>
      <ul className={styles.breadcrumbs}>
        {breadcrumbs.map((breadcrumb, index) => {
          return (
            <li key={breadcrumb.path}>
              <NavLink to={`/${breadcrumb.path}`}>
                {breadcrumb.categoryName}{" "}
                {!(index === breadcrumbs.length - 1) && (
                  <img src={ARROW_ICON} alt="" />
                )}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
