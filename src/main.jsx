import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './views/home/Home';

// Configuração do roteador
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

// Renderiza a aplicação no elemento com a ID "root"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
