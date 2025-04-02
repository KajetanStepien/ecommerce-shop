import { BACK_END_URL } from "../constants/api";

export function handleAddToFavourites({ params: { productId } }) {
  console.log(productId);
  return fetch(`${BACK_END_URL}/favourites`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      productId: Number(productId),
    }),
  });
}
