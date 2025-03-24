import BAG_ICON from "../../assets/bag.svg";
import HEART_ICON from "../../assets/heart.svg";
import { Link } from "react-router-dom";
import styles from "./IconMenu.module.css";

export function IconMenu() {
  const cartItems = 2;
  return (
    <ul className={styles.iconMenu}>
      <li>
        <Link to="/favourites">
          <img src={HEART_ICON}></img>
        </Link>
      </li>
      <li>
        <Link to="/cart">
          <img src={BAG_ICON}></img>
          <div className={styles.numberOfProducts}>{cartItems}</div>
        </Link>
      </li>
    </ul>
  );
}
