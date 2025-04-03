import { CURRIENCIES } from "../../constants/currencies";
import styles from "./CurrencySelector.module.css";
import { useContext } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext";

export function CurrencySelector() {
  const [currency, setCurrency] = useContext(CurrencyContext);
  return (
    <select
      onChange={(e) => {
        setCurrency(e.currentTarget.value);
      }}
      className={styles.currencySelector}
    >
      <option value={CURRIENCIES.PLN}>{CURRIENCIES.PLN}</option>
      <option value={CURRIENCIES.USD}>{CURRIENCIES.USD}</option>
    </select>
  );
}
