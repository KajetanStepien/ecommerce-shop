import ARROW_DOWN from "../../assets/arrow-down.svg";
import ARROW_UP from "../../assets/arrow-up.svg";
import styles from "./ExpandableMenu.module.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CATEGORIES } from "../../constants/categories";

export function ExpandableMenu() {
  const [isOpen, setIsOpen] = useState([false, false, false, false]);

  function handleExpand(index) {
    setIsOpen((prevArr) => {
      const newArr = [...prevArr];
      newArr[index] = !newArr[index];
      return newArr;
    });
  }

  function iconSelector(index) {
    return isOpen[index] ? ARROW_UP : ARROW_DOWN;
  }

  return (
    <div className={styles.expandableMenu}>
      <span>Kobieta</span>
      {CATEGORIES.map((category, index) => {
        return (
          <>
            <button
              onClick={() => handleExpand(index)}
              key={category.categoryName}
            >
              {category.categoryName} <img src={iconSelector(index)} alt="" />
            </button>
            {isOpen[index] && (
              <div className={styles.additionalOptions}>
                {category.subCategories.map((subCategory) => {
                  return (
                    <NavLink
                      to={`${category.path}/${subCategory.path}`}
                      key={subCategory.categoryName}
                    >
                      {subCategory.categoryName}
                    </NavLink>
                  );
                })}
              </div>
            )}
          </>
        );
      })}
    </div>
  );
}
