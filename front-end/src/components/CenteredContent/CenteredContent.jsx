import styles from "./CenteredContent.module.css";

export function CenteredContent({ children }) {
  return <div className={styles.centeredContent}>{children}</div>;
}
