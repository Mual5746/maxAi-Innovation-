import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
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
import About from './Components/About/About.jsx'
import Allcurses from './Components/allcourses/CourseHome.jsx'
import Pricing from './Components/pricing/Pricing.jsx';

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
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/allcurses",
    element: <Allcurses />,
  },

  {
    path: "/pricing",
    element: <Pricing />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
