import { CurrencySelector } from "../CurrencySelector/CurrencySelector";
import { Footer } from "../Footer/Footer";
import { Logo } from "../Logo/Logo";
import { MainMenu } from "../MainMenu/MainMenu";
import { IconMenu } from "../IconMenu/IconMenu";
import { TopBar } from "../TopBar/TopBar";
import { CategoryMenu } from "../CategoryMenu/CategoryMenu";
import { MainContent } from "../MainContent/MainContent";
import { Outlet } from "react-router-dom";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { CartContext } from "../../contexts/CartContext";
import { CURRIENCIES } from "../../constants/currencies";
import { useLocalStorage } from "../../hooks/useLocalStorage";

export function Layout() {
  const [currency, setCurrency] = useLocalStorage(
    "selected_currency",
    CURRIENCIES.PLN
  );
  const [cartItems, setCartItems] = useLocalStorage("cart_products", []);
  function addProductToCart(newProduct) {
    const newState = [...cartItems, newProduct];
    setCartItems(newState);
  }

  return (
    <>
      <CurrencyContext.Provider value={[currency, setCurrency]}>
        <CartContext.Provider value={[cartItems, addProductToCart]}>
          <MainContent>
            <TopBar>
              <MainMenu />
              <Logo />
              <div>
                <CurrencySelector />
                <IconMenu />
              </div>
            </TopBar>
            <CategoryMenu />
            <Outlet />
          </MainContent>
        </CartContext.Provider>
      </CurrencyContext.Provider>
      <Footer />
    </>
  );
}
