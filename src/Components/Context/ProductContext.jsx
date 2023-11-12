import React, { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [productStates, setProductStates] = useState({});

  const updateProductState = (customKey, newCount, price) => {
    setProductStates((prevProductStates) => ({
      ...prevProductStates,
      [customKey]: { count: newCount, price },
    }));
  };

  return (
    <ProductContext.Provider value={{ productStates, updateProductState }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProductContext() {
  return useContext(ProductContext);
}
