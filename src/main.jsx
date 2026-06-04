import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { Store } from './Redux/Store.js'

createRoot(document.getElementById('root')).render(
<StrictMode>
    <Provider store={Store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
