import React, { useState, useEffect } from "react";

const InputComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(inputValue), 1000);
    return () => clearTimeout(timer);
  }, [inputValue]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  //let [time, setTime] = useState(1);

  // useEffect(() => {
  //   console.log("start useeffect 2", time);

  //   let timer = setInterval(() => {
  //     setTime(time + 1);
  //     console.log("timer2", time);
  //     console.log("end cycle ", time);
  //     console.log("  ");
  //   }, 2000);

  //   return () => {
  //     clearInterval(timer);
  //     console.log("return function ", time);
  //   };
  // }, [time]);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
        className="border-2 border-red-600 text-black"
      />
      <div>
        <p>Debounced value: {debouncedValue}</p>
        {/* <p>{time}</p> */}
      </div>
    </div>
  );
};

export default InputComponent;
