import styles from "./CartSummary.module.css";
import CAR from "../../assets/car.svg";
export function CartSummary({ cartProducts }) {
  const deliveryFee = 49;
  const minFreeDeliveryPrice = 500;

  let finalPrice = 0;
  cartProducts.forEach((product) => (finalPrice += product.pricePLN));

  return (
    <div className={styles.cartSummary}>
      <h2>Podsumowanie</h2>
      <div>
        <p>
          <span>Wartość produktów:</span>
          <span>{finalPrice} zł</span>
        </p>
        <p>
          <span>Koszt dostawy:</span>
          <span>{finalPrice >= 500 ? 0 : deliveryFee} zł</span>
        </p>
        <p className={styles.boldParagraph}>
          <span>Do zapłaty:</span>
          <span>
            {finalPrice >= 500 ? finalPrice : finalPrice + deliveryFee} zł
          </span>
        </p>
      </div>
      <button>DO KASY</button>
      <div className={styles.divDisclaimer}>
        <img src={CAR}></img>
        Darmowa dostawa od {minFreeDeliveryPrice} zł
      </div>
    </div>
  );
}
