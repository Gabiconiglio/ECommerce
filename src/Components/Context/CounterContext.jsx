import { createContext, useEffect, useState } from "react";

export const CounterContext = createContext();
export function CounterProvider({ children }) {
  const storedItems = JSON.parse(localStorage.getItem("cartItems"));
  const initialItems = storedItems ? storedItems : 0;

  const [items, setItems] = useState(initialItems);

  useEffect(() => {
    const parsedItems = JSON.stringify(items);
    localStorage.setItem("cartItems", parsedItems);
  }, [items]);

  return (
    <CounterContext.Provider value={{ items, setItems }}>
      {children}
    </CounterContext.Provider>
  );
}
