import { useState, useMemo } from "react";

const Counter = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i;
    while (i < 5000000000000000) i++;
    console.log("check even");
    return counterOne % 2 === 0;
  }, [counterOne]);
  return (
    <div>
      <button onClick={() => incrementOne()}>Count One - {counterOne}</button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <button onClick={() => incrementTwo()}>Count Two - {counterTwo}</button>
    </div>
  );
};

export default Counter;
