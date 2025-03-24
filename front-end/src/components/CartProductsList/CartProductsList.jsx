import { CenteredContent } from "../CenteredContent/CenteredContent";
import { CartProduct } from "../CartProduct/CartProduct";
import styles from "../CartProductsList/CartProductsList.module.css";

export function CartProductsList({ cartProducts }) {
  return (
    <CenteredContent>
      <div className={styles.cartProductsWrapper}>
        <h2>Koszyk</h2>
        {cartProducts.map((product) => {
          return <CartProduct key={product.id} product={product} />;
        })}
      </div>
    </CenteredContent>
  );
}
