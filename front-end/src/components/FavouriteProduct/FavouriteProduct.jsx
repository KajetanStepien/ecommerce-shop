import styles from "../FavouriteProduct/FavouriteProduct.module.css";
import REMOVE from "../../assets/remove.svg";
import CART from "../../assets/Vector.svg";
import { useFetcher } from "react-router-dom";
import { Price } from "../Price/Price";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function FavouriteProduct({ favourite }) {
  const [, addProductToCart] = useContext(CartContext);
  const product = favourite.product;
  const { Form } = useFetcher();
  return (
    <div className={styles.contentWrapper}>
      <img src={product.photos[0]} />
      <div className={styles.favouriteProductInfo}>
        <div className={styles.topRow}>
          <h3>
            {product.brand} {product.productName}
          </h3>
          <p>
            <Price product={favourite.product} />
          </p>
        </div>
        <p className={styles.priceRow}>
          <span>Cena: </span>
          <Price product={favourite.product} />
        </p>
        <div className={styles.buttonRow}>
          <Form
            method="delete"
            action={`/delete-from-favourites/${favourite.id}`}
          >
            <button>
              <img src={REMOVE} />
              Usuń z ulubionych
            </button>
          </Form>
          <button
            onClick={() => {
              addProductToCart(product);
            }}
          >
            <img src={CART} />
            Dodaj do koszyka
          </button>
        </div>
      </div>
    </div>
  );
}
