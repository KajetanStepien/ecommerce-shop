import ARROW_DOWN from "../../assets/arrow-down.svg";
import ARROW_UP from "../../assets/arrow-up.svg";
import styles from "./ExpandableMenu.module.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

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
      <button onClick={() => handleExpand(0)}>
        Odzież <img src={iconSelector(0)} />
      </button>
      {isOpen[0] && (
        <div className={styles.additionalOptions}>
          <NavLink>
            <button>Koszulki</button>
          </NavLink>
          <NavLink>
            <button>Swetry</button>
          </NavLink>
          <NavLink>
            <button>Spodnie</button>
          </NavLink>
        </div>
      )}
      <button onClick={() => handleExpand(1)}>
        Obuwie <img src={iconSelector(1)} />
      </button>
      {isOpen[1] && (
        <div className={styles.additionalOptions}>
          <NavLink>
            <button>Eleganckie</button>
          </NavLink>
        </div>
      )}
      <button onClick={() => handleExpand(2)}>
        Akcesoria <img src={iconSelector(2)} />
      </button>
      {isOpen[2] && <div className={styles.additionalOptions}></div>}
      <button onClick={() => handleExpand(3)}>
        Sport <img src={iconSelector(3)} />
      </button>
      {isOpen[3] && <div className={styles.additionalOptions}></div>}
    </div>
  );
}
