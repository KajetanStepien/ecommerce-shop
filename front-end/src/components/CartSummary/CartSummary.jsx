import styles from "./CartSummary.module.css";
import CAR from "../../assets/car.svg";
import { useContext } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { CURRIENCIES } from "../../constants/currencies";

export function CartSummary({ cartProducts }) {
  const [currency] = useContext(CurrencyContext);

  const currencySymbol = currency === CURRIENCIES.PLN ? "zł" : "$";

  const deliveryFee = currency === CURRIENCIES.PLN ? 20 : 5;
  const minFreeDeliveryPrice = currency === CURRIENCIES.PLN ? 500 : 200;

  let finalPrice = 0;
  cartProducts.forEach(
    (product) =>
      (finalPrice +=
        currency === CURRIENCIES.PLN ? product.pricePLN : product.priceUSD)
  );

  return (
    <div className={styles.cartSummary}>
      <h2>Podsumowanie</h2>
      <div>
        <p>
          <span>Wartość produktów:</span>
          <span>
            {finalPrice} {currencySymbol}
          </span>
        </p>
        <p>
          <span>Koszt dostawy:</span>
          <span>
            {finalPrice >= minFreeDeliveryPrice ? 0 : deliveryFee}{" "}
            {currencySymbol}
          </span>
        </p>
        <p className={styles.boldParagraph}>
          <span>Do zapłaty:</span>
          <span>
            {finalPrice >= minFreeDeliveryPrice
              ? finalPrice
              : finalPrice + deliveryFee}{" "}
            {currencySymbol}
          </span>
        </p>
      </div>
      <button>DO KASY</button>
      <div className={styles.divDisclaimer}>
        <img src={CAR}></img>
        Darmowa dostawa od {minFreeDeliveryPrice} {currencySymbol}
      </div>
    </div>
  );
}
