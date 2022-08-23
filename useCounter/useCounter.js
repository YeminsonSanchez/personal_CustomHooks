import { useState } from "react";
import PropTypes from "prop-types";

export const useCounter = (initialValue = 1) => {
  const [counter, setcounter] = useState(initialValue);

  const increment = (value = 1) => setcounter(counter + value);
  const decrement = (value = 1) =>
    counter === 0 ? (counter = 0) : setcounter(counter - value);
  const reset = () => setcounter(initialValue);
  return {
    counter,
    increment,
    decrement,
    reset,
  };
};

useCounter.propTypes = {
  initialValue: PropTypes.number.isRequired,
};

useCounter.defaultProps = {
  value: 1,
};
