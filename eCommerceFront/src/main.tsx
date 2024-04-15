import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout/MainLayout'
import Home from '@pages/Home';
import Products from '@pages/Products';
import Categories from '@pages/Categories';
import AboutUs from '@pages/AboutUs';
import Cart from '@pages/Cart';
import Login from '@pages/Login';
import Register from '@pages/Register';

const router = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    children:[
      {
        index:true,
        element:<Home/>,
      },
      {
        path:"categories",
        element:<Categories/>
      },
      {
        path:"products/:prefix",
        element:<Products/>
      },
         {
        path:"aboutus",
        element:<AboutUs/>
      },
         {
        path:"Login",
        element:<Login/>
      },
         {
        path:"Register",
        element:<Register/>
      },
         {
        path:"cart",
        element:<Cart/>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}></RouterProvider>
)
