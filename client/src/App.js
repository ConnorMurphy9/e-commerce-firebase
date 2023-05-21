import React from "react";
import Home from "./Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import Pizza from "./components/Pizza";
import Login from "./pages/Login";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import { pizzaData } from "./api/Api";

const Layout = () => {
  return(
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  )
};

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children:[
      {
        path:"/",
        element: <Home />,
        loader: pizzaData,
      },
      {
        path:"/pizza/:id",
        element: <Pizza />,
      },
      {
        path:"/cart",
        element: <Cart />,
      },
      {
        path:"/login",
        element: <Login />,
      }
    ],
  },
]);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
