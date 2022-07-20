import { useEffect, useState } from "react";

const usePersistedState = (defaultValue: any, localStorageKey: string) => {
  const [value, setValue] = useState(() => {
    const localStorageItem = localStorage.getItem(localStorageKey);
    if (localStorageItem === null) return defaultValue;
    try {
      return JSON.parse(localStorageItem);
    } catch (err) {
      return defaultValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export default usePersistedState;
