import { CurrencySelector } from "../CurrencySelector/CurrencySelector";
import { Footer } from "../Footer/Footer";
import { Logo } from "../Logo/Logo";
import { MainMenu } from "../MainMenu/MainMenu";
import { IconMenu } from "../IconMenu/IconMenu";

export function Layout() {
  return (
    <>
      <MainMenu />
      <Logo />
      <CurrencySelector />
      <IconMenu />
      <Footer />
    </>
  );
}
