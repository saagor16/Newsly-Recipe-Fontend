import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import CategoryPage from "./pages/category/CategoryPage.jsx";
import Search from "./pages/Search.jsx";
import SingleProduct from "./pages/products/SingleProduct.jsx";
import Recipes from "./pages/products/Recipes.jsx";
import Resources from "./pages/resources/Resources.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children :[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/categories/:category',
        element:<CategoryPage></CategoryPage>
      },
      {
        path:'/search',
        element:<Search></Search>
      },
      {
        path:'/items/:id',
        element:<SingleProduct></SingleProduct>,
        loader: ({params})=>fetch(`http://localhost:5000/api/items/${params.id}`)
      },
      {
        path:'/recipes',
        element:<Recipes></Recipes>
      },
      {
        path:'/resources',
        element:<Resources></Resources>
      },
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
