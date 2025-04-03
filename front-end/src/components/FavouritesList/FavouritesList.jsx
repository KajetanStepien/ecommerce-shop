import { CenteredContent } from "../CenteredContent/CenteredContent";
import { FavouriteProduct } from "../FavouriteProduct/FavouriteProduct";
import styles from "../FavouritesList/FavouritesList.module.css";

export function FavouritesList({ favourites }) {
  return (
    <CenteredContent>
      <div className={styles.favouritesList}>
        <h2>Ulubione</h2>
        <div>
          {favourites.map((product) => {
            return <FavouriteProduct key={product.id} favourite={product} />;
          })}
        </div>
      </div>
    </CenteredContent>
  );
}
