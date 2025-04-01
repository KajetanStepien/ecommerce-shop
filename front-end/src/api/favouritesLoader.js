import { BACK_END_URL } from "../constants/api";

export async function favouritesLoader() {
  return fetch(`${BACK_END_URL}/favourites`)
    .then((res) => res.json())
    .then((resArr) => {
      if (!resArr || resArr.length === 0) {
        return [];
      }

      const favourites = resArr.map((res) =>
        fetch(`${BACK_END_URL}/products/${res.productId}`).then((res) =>
          res.json()
        )
      );
      return Promise.all(favourites);
    });
}
