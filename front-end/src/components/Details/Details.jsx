import { FullWidthButton } from "../../components/FullWidthButton/FullWidthButton";

export function Details({ product }) {
  return (
    <div>
      <h2>{product.brand}</h2>
      <h3>{product.productName}</h3>
      <p>{product.pricePLN}zł</p>
    </div>
  );
}
