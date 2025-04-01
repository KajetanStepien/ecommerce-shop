import { NavLink, useParams } from "react-router-dom";
import ARROW_ICON from "../../assets/arrow-horizontal.svg";
import styles from "../Breadcrumbs/Breadcrumbs.module.css";
import { GENDERS, CATEGORIES } from "../../constants/categories";

export function Breadcrumbs() {
  const { gender, category, subcategory } = useParams();

  const foundGender = GENDERS.find((g) => g.path === gender);
  const foundCategory = CATEGORIES.find((c) => c.path === category);

  const breadcrumbs = [
    { categoryName: foundGender.categoryName, path: `/${foundGender.path}` },
    {
      categoryName: foundCategory.categoryName,
      path: `/${foundGender.path}/${foundCategory.path}`,
    },
  ];

  if (subcategory) {
    const foundSubcategory = foundCategory.subCategories.find(
      (sc) => sc.path === subcategory
    );
    breadcrumbs.push({
      categoryName: foundSubcategory.categoryName,
      path: `/${foundGender.path}/${foundCategory.path}/${foundSubcategory.path}`,
    });
  }
  return (
    <div className={styles.contentWrapper}>
      <ul className={styles.breadcrumbs}>
        {breadcrumbs.map((breadcrumb, index) => {
          return (
            <li key={breadcrumb.path}>
              <NavLink end to={breadcrumb.path}>
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
