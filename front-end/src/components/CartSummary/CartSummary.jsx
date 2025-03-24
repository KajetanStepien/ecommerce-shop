import styles from "./CartSummary.module.css";
import CAR from "../../assets/car.svg";
export function CartSummary() {
  return (
    <div className={styles.cartSummary}>
      <h2>Podsumowanie</h2>
      <div>
        <p>
          <span>Wartość produktów:</span>
          <span>396 zł</span>
        </p>
        <p>
          <span>Koszt dostawy:</span>
          <span>49 zł</span>
        </p>
        <p className={styles.boldParagraph}>
          <span>Do zapłaty:</span>
          <span>447 zł</span>
        </p>
      </div>
      <button>DO KASY</button>
      <div className={styles.divDisclaimer}>
        <img src={CAR}></img>
        Darmowa dostawa od 500 zł
      </div>
    </div>
  );
}
