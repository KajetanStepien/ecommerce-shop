import styles from "./FlexContainer.module.css";
import { CartProductsList } from "../CartProductsList/CartProductsList";
import { CartSummary } from "../CartSummary/CartSummary";
import { CenteredContent } from "../CenteredContent/CenteredContent";

export function FlexContainer({ children }) {
  return (
    <CenteredContent>
      <div className={styles.flexContainer}>{children}</div>
    </CenteredContent>
  );
}
