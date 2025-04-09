import { useState } from "react";

export function useLocalStorage(key, defaultValue) {
  function getJSONfromLocalStorage() {
    if (localStorage[key]) {
      return JSON.parse(localStorage[key]);
    }
    return defaultValue;
  }

  const [data, setData] = useState(() => getJSONfromLocalStorage());

  function setJSONtoLocalStorage(newData) {
    setData(newData);
    localStorage[key] = JSON.stringify(newData);
  }

  return [data, setJSONtoLocalStorage];
}
