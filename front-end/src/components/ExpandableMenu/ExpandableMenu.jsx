import ARROW_DOWN from "../../assets/arrow-down.svg";
import ARROW_UP from "../../assets/arrow-up.svg";
import styles from "./ExpandableMenu.module.css";
import { NavLink, useParams } from "react-router-dom";
import { CATEGORIES } from "../../constants/categories";
import { PATH_TO_GENDER_NAME } from "../../constants/api";

export function ExpandableMenu() {
  const params = useParams();
  const activePath = params.category;

  return (
    <ul className={styles.expandableMenu}>
      <span>{PATH_TO_GENDER_NAME[params.gender]}</span>
      {CATEGORIES.map((category) => {
        return (
          <li key={category.categoryName}>
            <NavLink to={`/${params.gender}/${category.path}`}>
              {category.categoryName}{" "}
              <img
                src={activePath === category.path ? ARROW_UP : ARROW_DOWN}
                alt=""
              />
            </NavLink>
            {activePath === category.path && (
              <ul className={styles.additionalOptions}>
                {category.subCategories.map((subCategory) => {
                  return (
                    <li key={subCategory.categoryName}>
                      <NavLink
                        to={`/${params.gender}/${category.path}/${subCategory.path}`}
                      >
                        {subCategory.categoryName}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
}
