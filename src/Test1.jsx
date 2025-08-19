import { useState } from "react";

export default function Test1() {
  const [inputValue, setInputValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");

  const handleClick = () => {
    setDisplayValue(inputValue);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Test1 successfully displayed</h2>
      <input
        type="text"
        placeholder="Enter Something....."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <br /> <br />
      <button onClick={handleClick}>Show in div</button>
      <br /> <br />
      <div style={{ padding: "10px", border: "1px solid black", minHeight: "30px" }}>
        {displayValue}
      </div>
    </div>
  );
}
