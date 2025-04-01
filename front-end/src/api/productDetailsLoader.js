import { BACK_END_URL } from "../constants/api";

export function productDetailsLoader({ params: { productId } }) {
  console.log(productId);

  return fetch(`${BACK_END_URL}/products/${productId}`);
}
