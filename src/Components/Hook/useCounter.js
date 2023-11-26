import { useState } from "react";

export function useCounter(initialDate) {
  const [counter, setCounter] = useState(initialDate);

  const handleAddUnit = () => {
    setCounter(counter + 1);
  };

  const handleSubtractUnit = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return [counter, handleAddUnit, handleSubtractUnit];
}
