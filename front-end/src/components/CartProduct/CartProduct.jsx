import REMOVE from "../../assets/remove.svg";
import styles from "./CartProduct.module.css";
import { Price } from "../Price/Price";

export function CartProduct({ product }) {
  return (
    <div className={styles.contentWrapper}>
      <img src={product.photos[0]} />
      <div className={styles.cartProductInfo}>
        <div className={styles.topRow}>
          <h3>
            {product.brand} {product.productName}
          </h3>
          <p>
            <Price product={product} />
          </p>
        </div>
        <p className={styles.priceRow}>
          <span>Cena: </span>
          <Price product={product} />
        </p>
        <div className={styles.buttonRow}>
          <button>
            <img src={REMOVE} />
            Usuń z koszyka
          </button>
        </div>
      </div>
    </div>
  );
}
