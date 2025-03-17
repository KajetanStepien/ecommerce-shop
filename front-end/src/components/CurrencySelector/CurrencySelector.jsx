import { CURRIENCIES } from "../../constants/currencies";
import styles from "./CurrencySelector.module.css";

export function CurrencySelector() {
  return (
    <select className={styles.currencySelector}>
      <option value={CURRIENCIES.PLN}>{CURRIENCIES.PLN}</option>
      <option value={CURRIENCIES.USD}>{CURRIENCIES.USD}</option>
    </select>
  );
}
