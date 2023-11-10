import { useState,useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        try {
            const storedValue = window.localStorage.getItem(key);
            return storedValue !== null ? JSON.parse(storedValue) : initialValue;
        } catch {
            return initialValue;
        }
    });

    const updateValue = (newValue) => {
        try {
            setValue(newValue);
            window.localStorage.setItem(key, JSON.stringify(newValue));
        } catch (err) {
            console.log(err);
        }
    };

    return [value, updateValue];
}

export function useLocalStorageRead(key, initialValue) {
    const [value, setValue] = useState(() => {
      try {
        const storedValue = window.localStorage.getItem(key);
        return storedValue !== null ? JSON.parse(storedValue) : initialValue;
      } catch {
        return initialValue;
      }
    });
  
    useEffect(() => {
      try {
        const storedValue = window.localStorage.getItem(key);
        setValue(storedValue !== null ? JSON.parse(storedValue) : initialValue);
      } catch {
        setValue(initialValue);
      }
    }, [key, initialValue]);
  
    return value;
  }