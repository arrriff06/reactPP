/*import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Add from './Add.jsx';
import React from 'react';
import AlignedTable from './AlignedTable.jsx';
import ButtonVariantsDemo from './ButtonVarientsDemo.jsx';*/
 

/*export default function App() {
  return (
    <BrowserRouter>
      <div style={{ textAlign: 'center' }}>
        <h1>React Route Example</h1>

        <nav>
          <Link to="/" style={{ marginRight: '10px' }}>XYZ</Link>
          <Link to="/button" style={{ marginRight: '10px' }}>ABC</Link>
          <Link to="/table">GHF</Link>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Add />} />
          <Route path="/button" element={<ButtonVariantsDemo />} />
          <Route path="/table" element={<AlignedTable />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
} */

import {useState} from "react";
import ReuseableTable from "./ReusableTable.jsx";

export default function App() {
  const studentColumns = [
    { header: "Name", accessor: "name" },
    { header: "Roll", accessor: "roll" },
    { header: "Marks", accessor: "marks" },
  ];

  const [students, setStudents] = useState([
    { name: "Arif", roll: "BCA-101", marks: 88 },
    { name: "Joy", roll: "BCA-102", marks: 38 },
    { name: "Rehan", roll: "BCA-103", marks: 49 },
  ]);

  // Sample product data and columns
  const productColumns = [
    { header: "Product Name", accessor: "productName" },
    { header: "Price", accessor: "price" },
    { header: "Quantity", accessor: "quantity" },
  ];

  const [products, setProducts] = useState([
    { productName: "Laptop", price: 55000, quantity: 5 },
    { productName: "Phone", price: 20000, quantity: 12 },
    { productName: "Tablet", price: 30000, quantity: 7 },
  ]);

  return (
    <div style={{ padding: 20, maxWidth: 900, margin: "0 auto" }}>
      <h1>Reusable Table Demo</h1>

      <section style={{ marginBottom: 40 }}>
        <h2>Students</h2>
        <ReusableTable
          caption="Student Marks"
          columns={studentColumns}
          data={students}
        />
      </section>

      <section>
        <h2>Products</h2>
        <ReusableTable
          caption="Inventory"
          columns={productColumns}
          data={products}
        />
      </section>
    </div>
  );
}
