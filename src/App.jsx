import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Add from './Add.jsx';
import React from 'react';
import AlignedTable from './AlignedTable.jsx';
import ButtonVariantsDemo from './ButtonVarientsDemo.jsx';

export default function App() {
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
}
