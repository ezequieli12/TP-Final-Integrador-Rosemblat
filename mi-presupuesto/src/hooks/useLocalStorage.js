import { useEffect, useState } from 'react';

export function useLocalStorage(key, initialValue) {
  const readValue = () => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : initialValue;
    } catch {
      return initialValue;
    }
  };

  const [value, setValue] = useState(readValue);

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
    }
  }, [key, value]);

  return [value, setValue];
}
