
import './App.css';
Component
// reusable piece of code
// must start with capital letter
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import Home from "./pages/Home";
import Category from "./pages/Category";
import Room from "./pages/Room";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import AboutUS from "./pages/AboutUs";
import Services from "./pages/Services";



import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import CartProvider from './store/CartProvider';
import AboutUs from './pages/AboutUs';
import { Contacts } from '@mui/icons-material';
import { Component } from 'react';


const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category/:id",
        element: <Category />,
      },
      {
        path: "/room/:id",
        element: <Room />,
      },
      // {
      //   path: "/register",
      //   element: <Register />,
      // },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/admin",
        element: <Admin/>,
      },
      {
        path: "/aboutus",
        element: <AboutUs/>,
      },
      {
        path: "/services",
        element: <Services/>,
      },
      
    ],
  },
]);

function App() {
  return (
    <CartProvider>
    <div className="App">
      <RouterProvider router={router} />
    </div>
    </CartProvider>
  );
}

export default App;
