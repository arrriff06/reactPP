import React, { useState } from "react";

export default function SimpleFormTable() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [data, setData] = useState([]);

  const handleAdd = () => {
    if (name && age) {
      setData([...data, { name, age }]);
      setName("");
      setAge("");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Data</h2>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        style={{ marginLeft: "10px" }}
      />
      <button onClick={handleAdd} style={{ marginLeft: "10px" }}>
        Add
      </button>

      <h2>Data Table</h2>
      <table border="1" cellPadding="8" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
