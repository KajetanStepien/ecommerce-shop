import { BACK_END_URL } from "../constants/api";

export function deleteFavouriteAction({ params: { favouriteId } }) {
  return fetch(`${BACK_END_URL}/favourites/${favouriteId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (!res.ok) {
      throw new Error("Failed to delete favourite");
    }
    return res.json();
  });
}
