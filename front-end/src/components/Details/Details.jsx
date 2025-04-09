import { FullWidthButton } from "../../components/FullWidthButton/FullWidthButton";
import styles from "../Details/Details.module.css";
import CAR from "../../assets/car.svg";
import RETURN from "../../assets/return.svg";
import { Accordion } from "../Accordion/Accordion";
import { useContext } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { CURRIENCIES } from "../../constants/currencies";
import { CartContext } from "../../contexts/CartContext";

export function Details({ product }) {
  const [currency] = useContext(CurrencyContext);
  const [, addProductToCart] = useContext(CartContext);
  const accordionContent = [
    {
      title: "Opis produktu",
      content: product.description,
    },
    {
      title: "Wskazówki pielęgnacyjne",
      content: product.maintenanceInfo,
    },
  ];

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.infoWrapper}>
        <h2>{product.brand}</h2>
        <h3>{product.productName}</h3>
        <p>
          {currency === CURRIENCIES.PLN
            ? product.pricePLN + "zł"
            : product.priceUSD + "$"}
        </p>
      </div>
      <FullWidthButton
        onClick={() => {
          addProductToCart(product);
        }}
        isBlack={true}
      >
        Dodaj do koszyka
      </FullWidthButton>
      <ul className={styles.infoList}>
        <li>
          <img src={CAR} alt="" />
          Dostawa do 24h
        </li>
        <li>
          <img src={RETURN} alt="" />
          Zwrot do 100 dni!
        </li>
      </ul>
      <Accordion items={accordionContent} />
    </div>
  );
}
