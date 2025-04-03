import { useContext } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { CURRIENCIES, CURRENCY_SIGN } from "../../constants/currencies";

export function Price({ product }) {
  const [currency] = useContext(CurrencyContext);
  return (
    <>
      {currency === CURRIENCIES.PLN
        ? product.pricePLN + CURRENCY_SIGN[currency]
        : product.priceUSD + CURRENCY_SIGN[currency]}
    </>
  );
}
