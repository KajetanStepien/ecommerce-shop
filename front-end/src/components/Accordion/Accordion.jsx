import { useState } from "react";
import styles from "../Accordion/Accordion.module.css";
import ARROW_DOWN from "../../assets/arrow-down.svg";
import ARROW_UP from "../../assets/arrow-up.svg";

export function Accordion({ items }) {
  const [isExpanded, setIsExpanded] = useState([false, false]);

  function handleExpand(index) {
    setIsExpanded((prevArr) => {
      const newArr = [...prevArr];
      newArr[index] = !newArr[index];
      return newArr;
    });
  }

  return (
    <ul className={styles.expandableMenu}>
      {/* <li onClick={() => handleExpand(0)}>
        Opis produktu
        <img src={isExpanded[0] ? ARROW_UP : ARROW_DOWN} />
      </li>
      {isExpanded[0] && (
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
          consectetur voluptatem ullam corporis accusamus inventore placeat?
          Rerum nihil debitis eum est saepe voluptas? Eum tempora temporibus
          explicabo sint ad debitis.
        </p>
      )}
      <li onClick={() => handleExpand(1)}>
        Wskazówki pielęgnacyjne
        <img src={isExpanded[1] ? ARROW_UP : ARROW_DOWN} />
      </li>
      {isExpanded[1] && (
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
          consectetur voluptatem ullam corporis accusamus inventore placeat?
          Rerum nihil debitis eum est saepe voluptas? Eum tempora temporibus
          explicabo sint ad debitis.
        </p>
      )} */}
      {items.map((item, index) => {
        return (
          <li key={index} onClick={() => handleExpand(index)}>
            <div>
              {item.title}
              <img src={isExpanded[index] ? ARROW_UP : ARROW_DOWN} />
            </div>
            {isExpanded[index] && <p>{item.content}</p>}
          </li>
        );
      })}
    </ul>
  );
}
