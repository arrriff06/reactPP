import { useState } from "react";

export default function Test1() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState("");

  const calculate = (operator) => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);


    let res;
    switch (operator) {
      case "+":
        res = num1 + num2;
        break;
      case "-":
        res = num1 - num2;
        break;
      case "*":
        res = num1 * num2;
        break;
      case "/":
        res = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
        break;
      default:
        res = "Invalid operation";
    }
    setResult(res);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Simple Calculator</h2>
      <input
        type="text"
        placeholder="Enter first number"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
      />
      <br /> <br />
      <input
        type="text"
        placeholder="Enter second number"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
      />
      <br /> <br />
      <div>
        <button onClick={() => calculate("+")}>+</button>{" "}
        <button onClick={() => calculate("-")}>-</button>{" "}
        <button onClick={() => calculate("*")}>*</button>{" "}
        <button onClick={() => calculate("/")}>/</button>
      </div>
      <br />
      <div style={{ padding: "10px", border: "1px solid black", minHeight: "30px", width: "150px", margin: "auto" }}>
        {result}
      </div>
    </div>
  );
}
