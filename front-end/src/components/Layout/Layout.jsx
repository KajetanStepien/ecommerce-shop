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
import { useState } from "react";
import { CURRIENCIES } from "../../constants/currencies";

export function Layout() {
  const [currency, setCurrency] = useState(CURRIENCIES.PLN);
  return (
    <>
      <CurrencyContext.Provider value={[currency, setCurrency]}>
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
      </CurrencyContext.Provider>
      <Footer />
    </>
  );
}
