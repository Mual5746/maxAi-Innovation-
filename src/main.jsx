import React from 'react'
import ReactDOM from 'react-dom/client'
import 'semantic-ui-css/semantic.min.css'
import App from './App.jsx'
import './index.css'
import Etiskpage from './Pages/Etiskpage.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Fullstack from './Pages/Fullstack.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "etisk",
    element: <Etiskpage />,
  },
  {
    path: "fullstak",
    element: <Fullstack />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
