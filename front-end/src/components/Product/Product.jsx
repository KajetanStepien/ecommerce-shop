import { Link } from "react-router-dom";
import styles from "./Product.module.css";

export function Product({ product }) {
  return (
    <Link className={styles.product}>
      <img src={product.photos[0]}></img>
      <h3>{product.productName}</h3>
      <p>{product.pricePLN}</p>
      <div className={styles.heart}></div>
    </Link>
  );
}
