import { Layout } from "../../components/Layout/Layout";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { CartProductsList } from "../../components/CartProductsList/CartProductsList";
import { CartSummary } from "../../components/CartSummary/CartSummary";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Cart() {
  const [cartItems] = useContext(CartContext);
  return (
    <FlexContainer>
      <CartProductsList cartProducts={cartItems} />
      <CartSummary cartProducts={cartItems} />
    </FlexContainer>
  );
}
