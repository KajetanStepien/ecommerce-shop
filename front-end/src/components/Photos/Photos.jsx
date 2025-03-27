import { FlexContainer } from "../FlexContainer/FlexContainer";
import styles from "../Photos/Photos.module.css";
import { useState } from "react";

export function Photos({ productPhotos }) {
  const [activePhoto, setActivePhoto] = useState(productPhotos[0]);

  return (
    <FlexContainer>
      <ul className={styles.photosList}>
        {productPhotos.map((photo) => {
          return (
            <li key={photo}>
              <img
                src={photo}
                onClick={() => setActivePhoto(photo)}
                className={photo === activePhoto ? styles.activePhoto : ""}
              />
            </li>
          );
        })}
      </ul>
      <img className={styles.bigPhoto} src={activePhoto} alt="" />
    </FlexContainer>
  );
}
