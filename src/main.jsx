import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import SimpleFormTable from './SimpleFormTable.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SimpleFormTable />
  </StrictMode>
);
