import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import About from '../pages/About';
import HousingLayout from '../pages/HousingLayout';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "housing/:id",
    element: <HousingLayout/>,
    errorElement: <NotFound/>
  },
  {
    path: "*",
    element: <NotFound/>
  }
]);