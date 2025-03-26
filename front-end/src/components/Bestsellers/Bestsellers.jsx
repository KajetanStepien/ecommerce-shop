import { CenteredContent } from "../CenteredContent/CenteredContent";
import { Product } from "../Product/Product";
import styles from "./Bestsellers.module.css";

export function Bestsellers({ products, headerText }) {
  return (
    <CenteredContent>
      <h2 className={styles.bestsellersHeader}>{headerText}</h2>
      <div className={styles.productsWrapper}>
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </CenteredContent>
  );
}
