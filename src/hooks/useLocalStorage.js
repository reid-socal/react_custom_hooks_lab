import { useEffect, useState } from "react";

/**
 *
 * @param {string} key - The localStorage key (and name of the input being stored).
 * @param {*} [initialValue=null] - Fallback used when nothing is stored under `key`.
 * @returns {[*, Function]} The current value and a setter, just like useState.
 */
export function useLocalStorage(key, initialValue = null) {
 
  const [state, setState] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored !== null ? stored : initialValue;
  });

  useEffect(() => {
    if (state === null || state === undefined) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, state);
    }
  }, [key, state]);

  return [state, setState];
}